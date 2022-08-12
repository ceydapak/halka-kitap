import { Component, OnInit } from '@angular/core';
import { Book } from '../models/books-model';
import { HalkaApiService } from '../services/halka-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[];
  constructor(private service:HalkaApiService){ }

  ngOnInit() {
    this.service.getBooks().subscribe((data)=>{
      this.books=data;
    });
  }

}

