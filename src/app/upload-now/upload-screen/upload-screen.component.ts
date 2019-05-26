import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.css']
})
export class UploadScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
  }

}
