import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoolDetailComponent } from './wool-detail.component';

describe('WoolDetailComponent', () => {
  let component: WoolDetailComponent;
  let fixture: ComponentFixture<WoolDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoolDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
