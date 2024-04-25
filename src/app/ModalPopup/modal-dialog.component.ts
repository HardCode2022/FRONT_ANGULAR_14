import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {

  // Propriété pour stocker l'ID de l'utilisateur à supprimer
  @Input() userId: number | null = null;

  // Evénement émis lorsque l'utilisateur confirme ou annule la suppression
  @Output() confirmed = new EventEmitter<boolean>();

  constructor() { }

  // Méthode pour émettre l'événement de confirmation de suppression
  confirmerSuppression(confirmed: boolean): void {
    this.confirmed.emit(confirmed);
  }
}
