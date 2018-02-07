import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNCondComponent } from './terms-n-cond.component';

describe('TermsNCondComponent', () => {
  let component: TermsNCondComponent;
  let fixture: ComponentFixture<TermsNCondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNCondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
