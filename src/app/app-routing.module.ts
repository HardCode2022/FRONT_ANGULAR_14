import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenuComponent } from './Bienvenu/bienvenu.component';
import { ConnexionComponent } from './Connexion/connexion.component';
import { DeconnexionComponent } from './Deconnexion/deconnexion.component';
import { DetailGuardGuard } from './Detail/detail-guard.guard';
import { DetailComponent } from './Detail/detail.component';
import { ErreurComponent } from './Erreur/erreur.component';
import { AjoutUtilisateurComponent } from './Formulaire/ajout-utilisateur.component';
import { UtilisateursComponent } from './Utilisateur/utilisateurs.component';

const routes: Routes = [

  { path: '', component: ConnexionComponent },//permet d'atterir directement sur la page de connexion
  { path: 'connexion', component: ConnexionComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'bienvenu', component: BienvenuComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'utilisateurs/:id', component: DetailComponent, canActivate: [DetailGuardGuard] },
  { path: 'ajoutUtilisateur/:id', component: AjoutUtilisateurComponent },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
