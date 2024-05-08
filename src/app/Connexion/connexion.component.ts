import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';
import { LoginForm } from './loginForm.component';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm: LoginForm = new LoginForm();

  passwordCacher: boolean = true;

  constructor(private connexionService: AuthentificationService, private router: Router) { }

  adresseMail = 'defissucces@gmail.com';
  motDePasse = '';

  connexionInValide: boolean = false;
  messageErreur: string = 'Veuillez verifier les informations de connexion'

  ngOnInit(): void {
  }

  /*connexionUtilisateur() {
    if (this.connexionService.connexion(this.adresseMail, this.motDePasse)) {
      this.router.navigate(['bienvenu']);
      this.connexionInValide = false;
    } else {
      this.connexionInValide = true;
    }
  }*/

  loginUser() {
    this.connexionService.authUser(this.loginForm).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['bienvenu']);
        this.connexionInValide = false;
      },
      error => {
        console.log(error);
        this.connexionInValide = true;
      }
    );
  }

  afficherMDP() {
    this.passwordCacher = !this.passwordCacher;
  }
}
