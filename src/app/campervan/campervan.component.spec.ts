import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CampervanComponent } from './campervan.component';

describe('CampervanComponent', () => {
  let component: CampervanComponent;
  let fixture: ComponentFixture<CampervanComponent>;

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
      declarations: [CampervanComponent],
      imports: [
        AngularFireDatabaseModule,
        BrowserAnimationsModule,
        FormsModule,
        MdSelectModule,
        MdOptionModule,
        MdCardModule,
        MdCheckboxModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampervanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
