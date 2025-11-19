import { Component } from '@angular/core';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { ArticlesComponent } from './composants/articles/articles.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { TachesComponent } from './composants/taches/taches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConnexionComponent,
    ArticlesComponent,
    ProduitsComponent,
    TachesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP4 Angular';
}
