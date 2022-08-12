import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books-model';
import {User} from '../models/user-model';
import { Library } from '../models/libraries-model';
import { Coupon } from '../models/coupons-model';
import { BookCategory } from '../models/bookcategory-model';
import { Router } from '@angular/router';
//import { JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class HalkaApiService {

constructor(private http: HttpClient, private router :Router) { }
path="https://localhost:7109/api";
// jwtHelper:JwtHelper = new JwtHelper();
// TOKEN_STRING:"tok";



//Book
getBooks():Observable<Book[]>{
   return this.http.get<Book[]>(this.path + "/Books");
}
getBook(id:number|string){
  return this.http.get<Book[]>(this.path + `/Books ${id}`);
}
updateBook(id:number|string,ubdata:any){
  return this.http.put<Book[]>(this.path + `/Books ${id}`,ubdata);
}

addBook( bdata:any){
  return this.http.post<Book[]>(this.path + '/Books',bdata);
}

deleteBook(id:number|string){
  return this.http.delete<Book[]>(this.path + `/Books ${id}`);
}


//User

getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.path + '/Users');
}

getUser(id:number):Observable<User>{
  return this.http.get<User>(this.path + `/Users ${id}`);
}

updateUser(id:number|string,uudata:any){
  return this.http.put<User[]>(this.path + `/Users ${id}`,uudata);
}

addUser( audata:any){
  return this.http.post<User[]>(this.path + '/Users', audata);
}

deleteUser(id:number|string){
  return this.http.delete<User[]>(this.path + `/Users ${id}`);
}

//Library
getLibraries():Observable<Library[]>{
  return this.http.get<Library[]>(this.path + '/Libraries');
}

updateLibraries(id:number|string,uldata:any){
  return this.http.put<Library[]>(this.path + `/Libraries${id}`,uldata);
}

addLibraries( ldata:any){
  return this.http.post<Library[]>(this.path + '/Libraries',ldata);
}

deleteLibraies(id:number|string){
  return this.http.delete<Library[]>(this.path + `/Libraries ${id}`);
}

//Coupons

getCoupons():Observable<Coupon[]>{
  return this.http.get<Coupon[]>(this.path + '/Coupons');
}

updateCoupons(id:number|string,udata:any){
  return this.http.put<Coupon[]>(this.path + `/Coupons ${id}`,udata);
}

addCoupons( cdata:any){
  return this.http.post<Coupon[]>(this.path + '/Coupons',cdata);
}

deleteCoupons(id:number|string){
  return this.http.delete<Coupon[]>(this.path + `/Coupons ${id}`);
}

//Category

getCategory():Observable<BookCategory[]>{
  return this.http.get<BookCategory[]>(this.path + '/BookCategories');
}

updateCategory(id:number|string,data:any){
  return this.http.put<BookCategory[]>(this.path + `/BookCategories ${id}`,data);
}

addCategory( adddata:any){
  return this.http.post<BookCategory[]>(this.path + '/BookCategories',adddata);
}

deleteCategory(id:number|string){
  return this.http.delete<BookCategory[]>(this.path + `/BookCategories ${id}`);
}


//Register

registerUser(registerdata:any){
  return this.http.post<User>('https://localhost:7109/api/User/register',registerdata);
}


//Login

loginUser(user:User): Observable<string>{
  return this.http.post('https://localhost:7109/api/User/login',user,{responseType:'text'});

}

logout(){
  localStorage.removeItem('tok');
  this.router.navigate(["/login"]);
}
// loggedin(){
//   return tokenNotExpired(this.TOKEN_STRING);
// }
// get token(){
//   return localStorage.getItem(this.TOKEN_STRING)
// }
// getUserId(){
//   return this.jwtHelper.decodeToken('tok').nameid
// }
}
