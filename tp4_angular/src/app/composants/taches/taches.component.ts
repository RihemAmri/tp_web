import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tache {
  description: string;
  statut: boolean;
  priorite: 'haute' | 'moyenne' | 'basse';
}

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent {
  taches: Tache[] = [
    { description: 'Apprendre Angular', statut: false, priorite: 'haute' },
    { description: 'Faire TP', statut: true, priorite: 'moyenne' }
  ];

  toggleStatut(tache: Tache) {
    tache.statut = !tache.statut;
  }
}
