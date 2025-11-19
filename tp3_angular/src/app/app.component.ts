import { Component } from '@angular/core';
import { BienvenueComponent } from './componenet/bienvenue/bienvenue.component';

import { ProduitComponent } from './componenet/produit/produit.component';
import { UtilisateurComponent } from './componenet/utilisateur/utilisateur.component';
import { PanierComponent } from './componenet/panier/panier.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BienvenueComponent, ProduitComponent, UtilisateurComponent, PanierComponent, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  messagePanier: string = '';
  
  ajouterAuPanier(produit: string) {
    this.messagePanier = `${produit} ajouté au panier !`;
  }
}
