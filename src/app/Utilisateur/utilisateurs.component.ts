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

  titrePage: string = "LISTE DES UTILISATEURS"

  utilisateurs: Utilisateur[] = [];

  filtreUtilisateurs: Utilisateur[] = [];

  _filtreUtilisateur!: string;

  // Déclaration des propriétés
  showConfirmationDialog: boolean = false;
  userIdToBeDeleted: number | null = null;


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
          console.log(dataUtilisateurs)
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
        //this.message = `L'utilisateur avec l'id ${id} à été supprimer avec succès`;
        this.showConfirmationDialog = false;
        this.recuperationListeUtilisateurs();
      }
    )
  }

  etoileClick(message: string) {
    this.noteMessage = 'La note de l`utilisateur selectionné est de :  ' + message
  }

  // Fonction pour afficher la boîte de dialogue de confirmation de suppression
  afficherConfirmationSuppression(id: number): void {
    this.userIdToBeDeleted = id;
    this.showConfirmationDialog = true;
  }

  // Fonction pour confirmer ou annuler la suppression
  confirmerSuppression(confirmed: boolean): void {
    if (confirmed && this.userIdToBeDeleted !== null) {
      this.suppression(this.userIdToBeDeleted);
    } else {
      // Réinitialiser les variables
      this.userIdToBeDeleted = null;
      this.showConfirmationDialog = false;
    }
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
