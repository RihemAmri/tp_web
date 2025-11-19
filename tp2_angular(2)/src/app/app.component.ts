import { Component } from '@angular/core';
import { UtilisateurComponent } from './componenet/utilisateur/utilisateur.component';
import { ProfilComponent } from './componenet/profil/profil.component';
import { AdresseComponent } from './componenet/adresse/adresse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    UtilisateurComponent,
    ProfilComponent,
    AdresseComponent
  ]
})
export class AppComponent {}
