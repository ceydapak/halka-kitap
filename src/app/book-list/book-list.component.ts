import { Component, OnInit } from '@angular/core';
import { Book } from '../models/books-model';
import { HalkaApiService } from '../services/halka-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private service: HalkaApiService) { }
  books: Book[];
  ngOnInit(): void {
  this.service.getBooks().subscribe((data)=>{
    this.books=data;
  });
  }

}
