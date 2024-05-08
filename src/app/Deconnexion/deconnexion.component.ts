import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private connexionService: AuthentificationService, private router: Router) { }


  messageDeconnexion: string = 'Deconnexion effectuée avec succès'

  ngOnInit(): void {
    this.connexionService.deconneter();
    this.router.navigate(['connexion']);
  }
}
