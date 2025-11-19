import { Component } from '@angular/core';
import { BookContainerComponent } from './components/book-container/book-container.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookContainerComponent],
  template: `<app-book-container></app-book-container>`
})
export class AppComponent {}
