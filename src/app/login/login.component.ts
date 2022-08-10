import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';
import { AlertifyService } from '../services/alertify.service';
import { HalkaApiService } from '../services/halka-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();


  constructor(private service : HalkaApiService, private alertify: AlertifyService, private router: Router) { }
  ngOnInit(): void {

  }

  loginNew(login:any){
   this.service.loginUser(this.user).subscribe( success => {
    console.warn(login);
    this.alertify.success("Successfully entered!");
    window.setTimeout(function(){location.reload()},2000);
    // const token = (<any>success).token;
    // localStorage.setItem('jwt',token);
    this.router.navigate(["/dashboard"]);
  },
    failure => {
     this.alertify.error("Email address or password is wrong!");
   });
}



}


function jwtToken(arg0: string, jwtToken: any) {
  throw new Error('Function not implemented.');
}

