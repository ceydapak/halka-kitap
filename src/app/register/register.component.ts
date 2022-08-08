import { Component, OnInit } from '@angular/core';
import { Library } from '../models/libraries-model';
import { HalkaApiService } from '../services/halka-api.service';
import { Register } from '../models/register-model';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Roles: any = ['Admin', 'Author', 'Reader'];

  constructor( private service : HalkaApiService, private alertify: AlertifyService) { }
  register= new Register;
  libraries : Library[];

  ngOnInit() {
  this.service.getLibraries().subscribe(data => {
      this.libraries = data;
    });
}

  addNewUser(data:any){
   this.service.registerUser(this.register).subscribe(()=>{
    console.warn(data);
    this.alertify.success("Successfully applied!");
    window.setTimeout(function(){location.reload()},3000);
   });
  }
}
