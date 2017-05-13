import { Injectable } from '@angular/core';
import { CanActivate, Router, NavigationStart }    from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/filter';

declare var Auth0Lock: any;

@Injectable()
export class AuthService implements CanActivate {
  
  lock = new Auth0Lock('nTCwryEixwWy1W3kQJ1YD3qHjjK3zHmL', 'tchakaspierings.eu.auth0.com', 
    {
      languageDictionary: {
        title: 'Get in here'
      },
      theme: {
        primaryColor: '#D00',
        logo: '../../assets/logo1.svg'
      }
    });
  loggedIn: boolean = false;

  constructor(public _router: Router) {
    this
      ._router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
      .subscribe(() => {
        this.lock.resumeAuth(window.location.hash, (error, authResult) => {
          if (error) return console.log(error);
          localStorage.setItem('id_token', authResult.idToken);
          this._router.navigate(['/']);
        });
    });
  }

  public canActivate() {
    if (this.authenticated()) {
      return true;
    }
    else {
      this._router.navigate(['landing']);
    }
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired('id_token');
  }

  public logout() {
    localStorage.removeItem('id_token');
  }
}
