import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moduble';
  constructor(private _router: Router) { }
  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this._router.navigate(['upload'])
    }
  }
}
