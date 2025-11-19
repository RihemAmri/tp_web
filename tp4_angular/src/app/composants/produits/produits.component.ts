import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produit {
  nom: string;
  stock: number;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits: Produit[] = [
    { nom: 'Chaussures', stock: 60 },
    { nom: 'Chapeau', stock: 30 },
    { nom: 'Sac', stock: 10 }
  ];
}
