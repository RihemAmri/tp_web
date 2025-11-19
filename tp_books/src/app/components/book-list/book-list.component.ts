import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  searchText: string = '';
  sortBy: string = '';

  get filteredBooks() {
    let list = this.books.filter(b =>
      b.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
    if (this.sortBy === 'category') list = list.sort((a, b) => a.category.localeCompare(b.category));
    if (this.sortBy === 'availability') list = list.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    return list;
  }

  trackById(index: number, book: Book) {
    return book.id;
  }
}
