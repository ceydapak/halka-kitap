import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { BookTestComponent } from './book-test/book-test.component';
import { BookCommentComponent } from './book-comment/book-comment.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookDetailsComponent,
    CouponDetailComponent,
    BookTestComponent,
    BookCommentComponent,
    RegisterComponent,
      DashboardComponent,
      ListComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgxIntlTelInputModule,
    TooltipModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
