import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.css']
})
export class ErreurComponent implements OnInit {

  messageErreur: string = 'Une erreur est survenue ! veuillez contacter votre assistant applicative au 0123456744 . Désolé pour la gène occasionné'

  constructor() { }

  ngOnInit(): void {
  }

}
