import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Menu/menu.component';
import { BienvenuComponent } from './Bienvenu/bienvenu.component';
import { UtilisateursComponent } from './Utilisateur/utilisateurs.component';
import { DetailComponent } from './Detail/detail.component';
import { UtilisateurPipePipe } from './Utilisateur/utilisateur-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { AjoutUtilisateurComponent } from './Formulaire/ajout-utilisateur.component';
import { ConnexionComponent } from './Connexion/connexion.component';
import { DeconnexionComponent } from './Deconnexion/deconnexion.component';
import { ErreurComponent } from './Erreur/erreur.component';
import { EtoileComponent } from './Etoiles/etoile.component';
import { JwtInterceptorService } from './Services/jwt-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BienvenuComponent,
    UtilisateursComponent,
    DetailComponent,
    UtilisateurPipePipe,
    AjoutUtilisateurComponent,
    ConnexionComponent,
    DeconnexionComponent,
    ErreurComponent,
    EtoileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
