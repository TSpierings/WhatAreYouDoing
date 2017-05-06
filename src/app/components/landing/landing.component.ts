import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    if(this._authService.loggedIn) {
      this._router.navigate(['tracker']);
    }    
  }

  onEnter() {
    this._router.navigate(['tracker']);
    this._authService.loggedIn = true;    
  }
}
