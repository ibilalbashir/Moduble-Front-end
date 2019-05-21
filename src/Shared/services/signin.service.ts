import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  url = environment.url
  constructor(private http: HttpClient) { }

  signinFn(obj): Observable<Object> {
    return this.http.post(`${this.url}/ModubleSellers/login`, obj);
  }
}
