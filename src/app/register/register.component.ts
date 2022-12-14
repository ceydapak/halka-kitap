import { Component, OnInit } from '@angular/core';
import { Library } from '../models/libraries-model';
import { HalkaApiService } from '../services/halka-api.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../models/user-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Roles: any = ['Admin', 'Author', 'Reader'];

  constructor( private service : HalkaApiService, private alertify: AlertifyService, private router: Router) { }

  libraries : Library[];
  user = new User();

  ngOnInit() {
  this.service.getLibraries().subscribe(data => {
      this.libraries = data;
    });
}

addNewUser(data:any){
  this.service.registerUser(this.user).subscribe((success)=>{
   console.warn(data);
   this.alertify.success("Successfully applied!");
   window.setTimeout(function(){location.reload()},2000);
   this.router.navigate(['/login']);
  },
  (failure) => {
   this.alertify.error("Something's wrong!");
 });
 }
}
