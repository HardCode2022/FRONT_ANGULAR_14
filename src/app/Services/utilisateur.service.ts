import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { URL_BACK_END_API } from '../app.constantes';
import { Utilisateur } from '../Utilisateur/utilisateurs.component';
import { TOKEN } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  //Appel de service au back end pour la recuperation des données(Liste Utilisateurs)
  recupererListeUtilisateurs() {
    return this.http.get<Utilisateur[]>(`${URL_BACK_END_API}/utilisateurs`).pipe(
      map(
        data => {
          return data
        }
      )
    );
  }
  //Appel de service au back end pour la recuperation d'un utilisateur par ID
  recupererUtilisateurParId(id: number) {
    return this.http.get<Utilisateur>(`${URL_BACK_END_API}/utilisateurs/${id}`).pipe(
      map(
        dataUtilisateur => {
          return dataUtilisateur
        }
      )
    );
  }
  //Appel de service permettant la creation d'un utilisateur
  creationUtilisateur(utilisateur: any) {

    return this.http.post(`${URL_BACK_END_API}/utilisateurs/creation`, utilisateur);
  }

  //Appel de service pour la suppression d'un utilisateur
  suppressionUtilisateur(id: any) {

    return this.http.delete(`${URL_BACK_END_API}/utilisateur/suppression/${id}`);
  }

  //Appel de service pour la mise à jour d'un utilisateur
  miseAJOurUtilisateur(id: any, utilisateur: any) {
    return this.http.put(`${URL_BACK_END_API}/utilisateur/miseAjour/${id}`, utilisateur);
  }

  getImages(): Observable<string[]> {
    return of(['assets/images/bob.png', 'assets/images/alice.png', 'assets/images/Charles.png', 'assets/images/rob.png', 'assets/images/Kilian.png', 'assets/images/Roland.png']);
  }
}
