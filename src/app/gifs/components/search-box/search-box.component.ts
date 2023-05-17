import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  // Hacer referencia a un elemento del template, mediante el id
  // Sirve para hacer referencia local
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  // searchTag(newTag: string) {
  searchTag() {
    console.log(this.tagInput.nativeElement.value);
  }
}
