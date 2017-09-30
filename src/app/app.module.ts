import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialog,
  MdIconModule,
  MdIconRegistry,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './auth/auth-guard.service';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './auth/login';
import { CampervanComponent } from './campervan/campervan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDRSdunMkfd-oQzSkx97kP-V5lauWyAOk4',
  authDomain: 'jam-dev-80fe6.firebaseapp.com',
  databaseURL: 'https://jam-dev-80fe6.firebaseio.com',
  projectId: 'jam-dev-80fe6',
  storageBucket: 'jam-dev-80fe6.appspot.com',
  messagingSenderId: '786198031392',
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    HomeComponent,
    FeedbackDialogComponent,
    PageNotFoundComponent,
    CampervanComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    FlexLayoutModule,
    MdInputModule,
    MdIconModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdButtonModule,
    MdMenuModule,
    MdTooltipModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdDatepickerModule,
    MdNativeDateModule,
  ],
  providers: [
    AuthGuard,
    MdIconRegistry,
    MdDialog,
  ],
  entryComponents: [FeedbackDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
