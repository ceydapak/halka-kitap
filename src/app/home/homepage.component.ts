import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  // isUserAuthenticated(){
  //   const token  = localStorage.getItem('jwt');
  //   if(token){
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }
  logout(){
      localStorage.removeItem('jwt');
  }
  ngOnInit(): void {
  }

}
