import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'DUSoscQeQ3uMlGT7iqyoZbJ2g23LqeDB';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    // Validar si el tag existe dentro del listado
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    // Insertar nuevo tag al inicio
    this._tagsHistory.unshift(tag);
    // Limitar la lista de tags a 10
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    // validar vacios
    if (tag.length === 0) return;
    // Organizar el listado de tags
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    this.http.get(`${this.serviceUrl}/search`, { params }).subscribe((resp) => {
      console.log(resp);
    });
  }
}
