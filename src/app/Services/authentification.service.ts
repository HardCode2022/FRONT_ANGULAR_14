import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../Connexion/connexion.component';
import { URL_BACK_END_API } from '../app.constantes';
import { map } from 'rxjs';

export const CONNEXION_UTILISATEUR = 'Utilisateur'
export const TOKEN = 'Token'

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  /*connexion(adresseMail: any, motDePasse: any) {
    if (adresseMail === "defissucces@gmail.com" && motDePasse === "FormationFullStack") {
      sessionStorage.setItem(TOKEN, adresseMail)
      return true;
    }
    return false
  }*/

  //SE CONNECTER AU BACK VIA JWT POUR RECUPERER LE TOKEN
  login(loginForm: LoginForm) {
    return this.http.post<any>(`${URL_BACK_END_API}/auth/login`, loginForm).pipe(
      map(
        data => {
          sessionStorage.setItem(CONNEXION_UTILISATEUR, loginForm.username)
          // Stocker le token JWT dans le stockage local ou de session
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data
        }
      )
    );
  }

  estConnecter() {
    let utilisateur = sessionStorage.getItem(TOKEN);
    return !(utilisateur === null);
  }

  deconneter() {
    sessionStorage.removeItem(TOKEN);
  }
}
