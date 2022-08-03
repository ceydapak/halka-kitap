import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HalkaApiService } from '../services/halka-api.service';
import { Book } from '../models/books-model';
import { Library } from '../models/libraries-model';
import { Coupon } from '../models/coupons-model';
import { User } from '../models/user-model';

@Component({
  selector: 'app-home-books',
  templateUrl: './home-books.component.html',
  styleUrls: ['./home-books.component.css'],
  providers: [HalkaApiService]
})
export class HomeBooksComponent implements OnInit {

constructor(private http:HttpClient,private service : HalkaApiService) { }
title="Kitaplar"
books: Book[];


  ngOnInit(): void {
      this.service.getBooks().subscribe(data=>{
        this.books = data;
      });
  }

}
