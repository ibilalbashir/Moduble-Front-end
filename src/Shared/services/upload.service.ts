import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = environment.url
  constructor(private http: HttpClient) { }

  uploadFn(container, file): Observable<any> {
    console.log('serveice')
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.url}/attachments/${container}/upload`, formData);
  }
}
