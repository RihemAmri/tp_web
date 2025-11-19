import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  prenom: string = '';
  isLoggedIn: boolean = false;

  toggleLogin() {
    this.isLoggedIn = (this.prenom === 'Riri'); // exemple validation
  }
}
