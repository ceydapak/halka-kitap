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
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomepageComponent},
  {path:"list", component:ListComponent},
  {path:"register", component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"user-detail", component:UserDetailComponent},
  {path:"book-detail", component:BookDetailsComponent},
  {path:"coupon-detail", component:CouponDetailComponent},
  {path:"book-test", component:BookTestComponent},
  {path:"book-comment", component:BookCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
