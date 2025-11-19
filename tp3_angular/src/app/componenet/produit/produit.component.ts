import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule], // ← ajoute ça
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  @Input() nomProduit: string = 'Produit';
  @Output() ajoutPanier = new EventEmitter<string>();

  imageUrl: string = '/assets/chaussure.jpg';
  prix: number = 120;
  enStock: boolean = true;

  afficherAlerte() {
    alert('Produit ajouté au panier');
    this.ajoutPanier.emit(this.nomProduit);
  }

  toggleStock() {
    this.enStock = !this.enStock;
  }
}
