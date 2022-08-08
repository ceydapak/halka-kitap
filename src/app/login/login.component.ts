import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login-model';
import { AlertifyService } from '../services/alertify.service';
import { HalkaApiService } from '../services/halka-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();

  constructor(private service : HalkaApiService, private alertify: AlertifyService) { }
  ngOnInit(): void {

  }

  loginNew(data:any){
    this.service.loginUser(this.login).subscribe(()=>{
      console.warn(data);
      this.alertify.success("Successfully entered!");
      window.setTimeout(function(){location.reload()},2000);
    })
  }


}
