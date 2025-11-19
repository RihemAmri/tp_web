import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  books: Book[] = [
    { id: 1, title: 'Angular Guide', author: 'John Doe', publisherEmail: 'john@example.com', publisherPhone: '12345678', releaseDate: '2023-01-01', category: 'Informatique', isAvailable: true, stock: 10 },
    { id: 2, title: 'Histoire de France', author: 'Jean Dupont', publisherEmail: 'jean@example.com', releaseDate: '2020-05-12', category: 'Histoire', isAvailable: false, stock: 0 }
  ];

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  selectedBook?: Book; // pour update

  addBook(book: Book) {
    if (!book.id) {
      book.id = this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
      this.books.push(book);
    } else {
      // Update
      const index = this.books.findIndex(b => b.id === book.id);
      if (index > -1) this.books[index] = book;
    }
  }

  editBook(book: Book) {
    this.selectedBook = { ...book }; // clone pour éviter liaison directe
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
}
