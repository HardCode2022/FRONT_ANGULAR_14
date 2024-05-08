import { Injectable } from '@angular/core';
import { LoginForm } from '../Connexion/loginForm.component';
import { HttpClient } from '@angular/common/http';
import { URL_BACK_END_API } from '../app.constantes';
import { map } from 'rxjs';

export const CONNEXION_UTILISATEUR = 'connexionUtilisateur';
export const TOKEN = 'Token';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  /*connexion(adresseMail: any, motDePasse: any) {
    if (adresseMail === "defissucces@gmail.com" && motDePasse === "FormationFullStack") {
      sessionStorage.setItem(CONNEXION_UTILISATEUR, adresseMail)
      return true;
    }
    return false
  }*/

  authUser(loginForm: LoginForm) {
    return this.http.post<any>(`${URL_BACK_END_API}/auth/login`, loginForm).pipe(
      map(
        data => {
          sessionStorage.setItem(CONNEXION_UTILISATEUR, loginForm.username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data
        }
      )
    );
  }

  estConnecter() {
    let utilisateur = sessionStorage.getItem(CONNEXION_UTILISATEUR);
    let token = sessionStorage.getItem(TOKEN);
    return !(utilisateur === null && token === null);
  }
  deconneter() {
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(CONNEXION_UTILISATEUR);
  }
}
