import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../models/books-model';
import { HalkaApiService } from '../services/halka-api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private service:HalkaApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.service.getBook(params.get('bookId'))
    //   )
    // ).subscribe(result => { this.book = result; }, error => console.error(error));




    var plus = document.querySelector(".fa-plus")!;
    var minus = document.querySelector(".fa-minus")!;
    var qty = document.querySelector(".qty")!;

plus.addEventListener('click',function(){
    let increment: number = 0;
    let int=parseInt(qty.innerHTML);
    if(increment<9){
        increment=increment+1;
       int=increment;
    }
});

minus.addEventListener('click',function(){
    let decrement=0
    let int=parseInt(qty.innerHTML);
    if(decrement>1){
        decrement=decrement-1;
        int=decrement;
    }
});

    var heart=document.querySelector(".fa-heart-o")!;

     heart.addEventListener('click',function(){
    if(heart.classList.contains('fa-heart-o')){
        heart.classList.remove('fa-heart-o');
        heart.classList.add('fa-heart');
    }
    else{
        heart.classList.add('fa-heart-o');
        heart.classList.remove('fa-heart');
    }

});
  }


}
