import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = environment.url;
  constructor(private http: HttpClient) {

  }
  RegisterLink(obj): Observable<Object> {
    return this.http.post(`${this.url}/ModubleSellers`, obj)
  }

}
