import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
  importance: 'élevée' | 'moyenne' | 'faible';
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: Article[] = [
    { titre: 'Angular', contenu: 'Framework JS', importance: 'élevée' },
    { titre: 'TypeScript', contenu: 'Langage typé', importance: 'moyenne' }
  ];

  nouveauTitre: string = '';
  nouveauContenu: string = '';
  nouvelleImportance: 'élevée' | 'moyenne' | 'faible' = 'faible';

  ajouterArticle() {
    if(this.nouveauTitre && this.nouveauContenu){
      this.articles.push({
        titre: this.nouveauTitre,
        contenu: this.nouveauContenu,
        importance: this.nouvelleImportance
      });
      this.nouveauTitre = '';
      this.nouveauContenu = '';
      this.nouvelleImportance = 'faible';
    }
  }
}
