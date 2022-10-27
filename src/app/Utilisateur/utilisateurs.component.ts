import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../Services/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  imageWidth: number = 50
  imageMarge: number = 2
  imageSize: number = 50

  messageError: string | undefined;

  montrerNotes: boolean = false;

  message!: string;

  noteMessage: string | undefined;

  titrePage: string = "Liste des utilisateurs"

  utilisateurs: Utilisateur[] = [];

  filtreUtilisateurs: Utilisateur[] = [];

  _filtreUtilisateur!: string;


  public get filtreUtilisateur(): string {
    return this._filtreUtilisateur;
  }

  public set filtreUtilisateur(value: string) {
    this._filtreUtilisateur = value;
    this.filtreUtilisateurs = this.filtreUtilisateur ? this.filtreDerecherche(this.filtreUtilisateur) : this.utilisateurs
  }

  filtreDerecherche(filtreUtilisateur: string): Utilisateur[] {
    filtreUtilisateur = filtreUtilisateur.toLocaleLowerCase();
    return this.utilisateurs.filter((utilisateur: Utilisateur) => utilisateur.nom.toLocaleLowerCase().indexOf(filtreUtilisateur) !== -1);
  }
  //Fonction d'initialisation de la liste de utilisateurs
  ngOnInit(): void {
    this.recuperationListeUtilisateurs();
  }

  //Methode d'appel au service de recuperation des donées utilisateurs
  recuperationListeUtilisateurs() {
    this.utilisateurService.recupererListeUtilisateurs().subscribe(
      {
        next: dataUtilisateurs => {
          console.log(`Recuperation de la liste des utilisateurs`)
          this.utilisateurs = dataUtilisateurs;
          this.filtreUtilisateurs = this.utilisateurs
        },
        error: err => this.messageError = err
      }
    );
  }

  montrerNote() {
    this.montrerNotes = !this.montrerNotes;
  }

  //Methode permettant de naviguer vers le formulaire Ajout Utilisateur
  ajoutUtilisateur() {
    this.router.navigate(['ajoutUtilisateur', -1]);
  }

  //Methode permettant de naviguer vers le formulaire Ajout Utilisateur
  miseAJour(id: any) {
    this.router.navigate(['ajoutUtilisateur', id]);
  }


  //Methode permettant de supprimer un utilisateur
  suppression(id: any) {
    console.log(`Suppression de l'utilisateur avec l'id ${id}`);
    this.utilisateurService.suppressionUtilisateur(id).subscribe(
      data => {
        console.log(data)
        this.message = `L'utilisateur avec l'id ${id} à été supprimer avec succès`;
        this.recuperationListeUtilisateurs();
      }
    )
  }

  etoileClick(message: string) {
    this.noteMessage = 'La note de l`utilisateur selectionné est de :  ' + message
  }

}

export class Utilisateur {
  constructor(
    public id: number,
    public nom: string,
    public age: number,
    public poste: string,
    public competences: string,
    public note: string,
    public image: string) {

  }
}
