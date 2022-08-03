import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';
import { Library } from '../models/libraries-model';
import { HalkaApiService } from '../services/halka-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor( private service : HalkaApiService) { }
  user = new User();
  libraries : Library[];

  ngOnInit() {
  this.service.getLibraries().subscribe(data => {
      this.libraries = data;
    });
}

  addNewUser(data:any){
   this.service.addUser(this.user).subscribe(()=>{
    console.warn(data)

   })


  }
}
