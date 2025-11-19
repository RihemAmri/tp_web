import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Input() book?: Book;
  @Output() saveBook = new EventEmitter<Book>();

  currentBook: Book = new Book();

  ngOnChanges() {
    if (this.book) {
      this.currentBook = { ...this.book };
    } else {
      this.currentBook = new Book();
      this.currentBook.isAvailable = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid && !/^\d+$/.test(this.currentBook.title)) { // interdit titre uniquement chiffres
      this.saveBook.emit(this.currentBook);
      form.resetForm({ isAvailable: true });
    }
  }
}
