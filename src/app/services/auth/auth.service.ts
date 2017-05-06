import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  loggedIn: boolean = false;

  constructor(private _router: Router) { }

  canActivate() {
    if (this.loggedIn) {
      return true;
    }
    else {
      this._router.navigate(['landing']);
    }
  }
}
