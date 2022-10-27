import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailGuardGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot) {
    let id = +route.url[1].path;
    if (isNaN(id) || id > 1000) {
      alert("Identifiant utilisateur saisie est invalide : Veuillez choisir parmis les six(1000) ! ")
      this.router.navigate(['/utilisateurs']);
      return false;
    }
    return true;
  }

}
