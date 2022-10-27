import { Injectable } from '@angular/core';

export const CONNEXION_UTILISATEUR = 'connexionUtilisateur'

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  connexion(adresseMail: any, motDePasse: any) {
    if (adresseMail === "defissucces@gmail.com" && motDePasse === "FormationFullStack") {
      sessionStorage.setItem(CONNEXION_UTILISATEUR, adresseMail)
      return true;
    }
    return false
  }
  estConnecter() {
    let utilisateur = sessionStorage.getItem(CONNEXION_UTILISATEUR);
    return !(utilisateur === null);
  }
  deconneter() {
    sessionStorage.removeItem(CONNEXION_UTILISATEUR);
  }
}
