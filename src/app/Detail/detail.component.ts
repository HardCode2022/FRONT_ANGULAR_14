import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../Services/utilisateur.service';
import { Utilisateur } from '../Utilisateur/utilisateurs.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pageTitre: String = 'Utilisateur'

  utilisateur!: Utilisateur

  errorMessage: String = 'Erreur survenue lors de la recuperation des données utilisateur';

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params['id'])

    const parametreId = this.route.snapshot.params['id'];

    if (parametreId) {
      const id = parametreId;
      this.recuperationUtilisateurparId(id);
    }

  }
  //Recuperation d'un utilisateur par id
  recuperationUtilisateurparId(id: number) {
    this.utilisateurService.recupererUtilisateurParId(id).subscribe(
      {
        next: dataUtilisateur => {
          this.utilisateur = dataUtilisateur
        },
        error: err => this.errorMessage = err
      }
    );

  }

  precedent() {
    this.router.navigate(['/utilisateurs']);
  }
}
