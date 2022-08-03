import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';
import { HalkaApiService } from '../services/halka-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service : HalkaApiService) { }
  user = new User();

  ngOnInit(): void {

  }

  control(data:any){

   

  }

}
