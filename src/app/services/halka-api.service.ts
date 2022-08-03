import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books-model';
import {User} from '../models/user-model';
import { Library } from '../models/libraries-model';
import { Coupon } from '../models/coupons-model';
import { BookCategory } from '../models/bookcategory-model';

@Injectable({
  providedIn: 'root'
})
export class HalkaApiService {

constructor(private http: HttpClient) { }
path="https://localhost:7109/api";


//Book
getBooks():Observable<Book[]>{
   return this.http.get<Book[]>(this.path + "/Books");
}
getBook(id:number|string){
  return this.http.get<Book[]>(this.path + `/Books ${id}`);
}
updateBook(id:number|string,data:any){
  return this.http.put<Book[]>(this.path + `/Books ${id}`,data);
}

addBook( data:any){
  return this.http.post<Book[]>(this.path + '/Books',data);
}

deleteBook(id:number|string){
  return this.http.delete<Book[]>(this.path + `/Books ${id}`);
}


//User

getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.path + '/Users');
}

getUser(id:number|string){
  return this.http.get<User[]>(this.path + `/Users ${id}`);
}

updateUser(id:number|string,data:any){
  return this.http.put<User[]>(this.path + `/Users ${id}`,data);
}

addUser( data:any){
  return this.http.post<User[]>(this.path + '/Users', data);
}

deleteUser(id:number|string){
  return this.http.delete<User[]>(this.path + `/Users ${id}`);
}

//Library
getLibraries():Observable<Library[]>{
  return this.http.get<Library[]>(this.path + '/Libraries');
}

updateLibraries(id:number|string,data:any){
  return this.http.put<Library[]>(this.path + `/Libraries${id}`,data);
}

addLibraries( data:any){
  return this.http.post<Library[]>(this.path + '/Libraries',data);
}

deleteLibraies(id:number|string){
  return this.http.delete<Library[]>(this.path + `/Libraries ${id}`);
}

//Coupons

getCoupons():Observable<Coupon[]>{
  return this.http.get<Coupon[]>(this.path + '/Coupons');
}

updateCoupons(id:number|string,data:any){
  return this.http.put<Coupon[]>(this.path + `/Coupons ${id}`,data);
}

addCoupons( data:any){
  return this.http.post<Coupon[]>(this.path + '/Coupons',data);
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

addCategory( data:any){
  return this.http.post<BookCategory[]>(this.path + '/BookCategories',data);
}

deleteCategory(id:number|string){
  return this.http.delete<BookCategory[]>(this.path + `/BookCategories ${id}`);
}
}
