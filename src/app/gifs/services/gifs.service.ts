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

  public searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
    console.log(this.tagsHistory);
  }
}
