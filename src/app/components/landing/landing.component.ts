import { Component, OnInit, AfterViewInit, trigger, state, transition, animate, style } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
        trigger('landingState', [
            state('active', style({opacity: '1'})),
            transition('active => inactive', [
              animate(250, style({opacity: '0'}))
            ])
        ])
    ]
})
export class LandingComponent implements OnInit{
  private state: string = 'active';

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    if (this._authService.authenticated()) {
      this._router.navigate(['/tracker']);
    }
  }

  animationDone(animEvent: any) {
    if (animEvent.toState === 'inactive') {
      this._authService.loggedIn = true;    
      this._router.navigate(['tracker']);
    }    
  }
}
