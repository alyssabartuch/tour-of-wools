import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoolsComponent } from './wools.component';

describe('WoolsComponent', () => {
  let component: WoolsComponent;
  let fixture: ComponentFixture<WoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
