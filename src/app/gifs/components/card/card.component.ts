import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) throw new Error('La propiedad Gif es requerida');
  }

  @Input()
  public gif!: Gif;
}
