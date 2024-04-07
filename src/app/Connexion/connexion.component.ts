import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';
import { Observable } from 'rxjs';
import { LoginForm } from './LoginForm.component';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm: LoginForm = new LoginForm();

  constructor(private connexionService: AuthentificationService, private router: Router) { }

  adresseMail = 'defissucces@gmail.com';
  motDePasse = '';

  //username: string = '';
  //password: string = '';

  connexionInValide: boolean = false;
  passwordCacher = true;
  messageErreur: string = 'Veuillez verifier les informations de connexion'

  ngOnInit(): void {

  }

  connexionUtilisateur() {
    if (this.connexionService.connexion(this.adresseMail, this.motDePasse)) {
      this.router.navigate(['bienvenu']);
      this.connexionInValide = false;
    } else {
      this.connexionInValide = true;
    }
  }

  //Connexion au back end par JWT
  login() {
    this.connexionService.login(this.loginForm).subscribe(
      data => {
        // Stocker le token JWT dans le stockage local ou de session
        console.log(data);
        this.router.navigate(['bienvenu']);
        this.connexionInValide = false;
      },
      error => {
        // Gérer les erreurs d'authentification
        console.log(error);
        this.connexionInValide = true;
      }
    );
  }

  afficherCacherMDP() {
    this.passwordCacher = !this.passwordCacher;
  }
}


