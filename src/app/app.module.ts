import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { ActivityComponent } from './components/activity/activity.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent },
  { path: 'tracker', component: TrackerComponent, canActivate: [AuthService] },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TrackerComponent,
    HeaderComponent,
    ActivityComponent,
    AddActivityComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
