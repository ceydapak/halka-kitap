import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCommentComponent } from './book-comment/book-comment.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookTestComponent } from './book-test/book-test.component';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './home/homepage.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomepageComponent},
  {path:"list", component:ListComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"'book-detail/:id", component:BookDetailsComponent},
  {path:"coupon-detail", component:CouponDetailComponent},
  {path:"book-test", component:BookTestComponent},
  {path:"book-comment", component:BookCommentComponent},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
