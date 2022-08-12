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

  loginNew(user: User){
    this.service.loginUser(user).subscribe((token:string)=>{
      localStorage.setItem('tok',token);
      this.alertify.success("Successfully entered!");
      this.router.navigate(["/dashboard"]);
    },
      failure => {
       this.alertify.error("Email address or password is wrong!");
       window.setTimeout(function(){location.reload()},2000);
     });


}

}
