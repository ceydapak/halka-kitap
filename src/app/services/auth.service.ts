import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'https://localhost:7109/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


constructor(private httpClient: HttpClient) { }

}
