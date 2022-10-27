import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../Services/utilisateur.service';
import { Utilisateur } from '../Utilisateur/utilisateurs.component';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {

  titre: string = "Ajout utilisateur"

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService, private router: Router) { }

  id!: number;

  utilisateur!: Utilisateur;

  errorMessage!: string;

  choixImage: Observable<string[]> | undefined;

  selectionImage: Boolean = false;

  ngOnInit(): void {

    this.choixImage = this.utilisateurService.getImages();

    console.log(this.route.snapshot.params['id'])

    //Recuperation et affectation du parametre "id"
    this.id = this.route.snapshot.params['id'];

    //S'il ne s'agit pas d'un nouveau utilisateur, alors on recupère l'utilisateur correspondant en BDD
    if (this.id != -1) {
      this.utilisateurService.recupererUtilisateurParId(this.id).subscribe({
        next: dataUtilisateurParId => {
          this.utilisateur = dataUtilisateurParId
        },
        error: err => this.errorMessage = err
      })

    } else {
      this.selectionImage = true;
      this.utilisateur = new Utilisateur(this.id, '', 30, '', '', '', 'assets/images/Kilian.png')
    }
  }
  //Fonction permettant de naviguer vers la liste des utilisateurs
  precedent() {
    this.router.navigate(['utilisateurs']);
  }
  //Fonction d'enregistrement d'un utilisateur via le boutton "Enregistrer" du formulaire d'ajout
  enregistrerUtilisateur(formulaire: NgForm) {
    if (formulaire.valid && this.id == -1) {
      this.utilisateurService.creationUtilisateur(this.utilisateur).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['utilisateurs']);
        }
      )
    } else {
      if (formulaire.valid) {
        this.utilisateurService.miseAJOurUtilisateur(this.id, this.utilisateur).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['utilisateurs']);
          }
        )
      }
    }
  }
}
