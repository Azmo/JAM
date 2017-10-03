import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
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
  MdOptionModule,
  MdSelectModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login';
import { CampervanComponent } from './campervan/campervan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDRSdunMkfd-oQzSkx97kP-V5lauWyAOk4',
      authDomain: 'jam-dev-80fe6.firebaseapp.com',
      databaseURL: 'https://jam-dev-80fe6.firebaseio.com',
      projectId: 'jam-dev-80fe6',
      storageBucket: 'jam-dev-80fe6.appspot.com',
      messagingSenderId: '786198031392',
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        CampervanComponent,
        DashboardComponent,
        HelpComponent,
        HomeComponent,
        PageNotFoundComponent,
      ],
      imports: [
        AppRouting,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MdMenuModule,
        MdOptionModule,
        MdDatepickerModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
