import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar")!.style.top = "0";
  } else {
    document.getElementById("navbar")!.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;


}
  }
  openNav() {
    const sidenav= document.getElementById('mySideNav')!.style.width = "250px";
    const main= document.getElementById("main")!.style.marginLeft = "250px";

  }
  closeNav() {
    const sidenav=document.getElementById("mySideNav")!.style.width = "0";
    const main=document.getElementById("main")!.style.marginLeft = "0";
  }
  logout(){
    const logout = document.getElementById("logout")!;
    logout.addEventListener('click', () => {
      this.router.navigate(["login"]);
    });

  }

}
