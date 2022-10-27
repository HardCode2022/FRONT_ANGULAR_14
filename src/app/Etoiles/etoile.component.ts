import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnChanges {

  constructor() { }

  @Input()
  note: any;

  largeur: number = 0;


  @Output()
  noteClick: EventEmitter<string> = new EventEmitter<string>();


  ngOnChanges(): void {
    this.largeur = Number.parseInt(this.note) * 10 / 5;
  }

  clickEtoile() {
    this.noteClick.emit(`${this.note}`)
  }
}
