import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  url = environment.url
  constructor(private http: HttpClient) { }

  sendInvitation(obj): Observable<Object> {
    console.log('in invitation service')
    return this.http.post(`${this.url}/invitations`, obj)
  }

  getInvitationById(id): Observable<Object> {
    return this.http.get(`${this.url}/invitations/${id}`);
  }
}
