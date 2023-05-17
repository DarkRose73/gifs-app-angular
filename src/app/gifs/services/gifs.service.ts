import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

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

  public searchTag(tag: string): void {
    // validar vacios
    if (tag.length === 0) return;
    // Organizar el listado de tags
    this.organizeHistory(tag);
  }
}
