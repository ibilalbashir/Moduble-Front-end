
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/Shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {

  }
  canActivate(): boolean {
    if (this.AuthService.loggedIn()) {
      this.router.navigate(['/upload'])
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }

}
