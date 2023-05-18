import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'DUSoscQeQ3uMlGT7iqyoZbJ2g23LqeDB';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gif service ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  // Organizar el historial de Tags
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
    this.saveLocalStorage();
  }

  // Guardar el historial de tags en localStorage
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  // Traer el historial de tags desde el localStorage
  private loadLocalStorage(): void {
    // No hay data
    if (!localStorage.getItem('history')) return;
    // Si hay data
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this.tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  // Buscar un tag en concreto, llamando a la API
  searchTag(tag: string): void {
    // validar vacios
    if (tag.length === 0) return;
    // Organizar el listado de tags
    this.organizeHistory(tag);

    // Definir parametros de la peticion Http
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    // Realizar peticion get con los parametros creados anteriormente
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        // console.log({ gifs: this.gifList });
      });
  }
}
