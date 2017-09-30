import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampervanComponent } from './campervan.component';

describe('CampervanComponent', () => {
  let component: CampervanComponent;
  let fixture: ComponentFixture<CampervanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampervanComponent]
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
