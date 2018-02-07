import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesWrapperComponent } from './sites-wrapper.component';

describe('SitesWrapperComponent', () => {
  let component: SitesWrapperComponent;
  let fixture: ComponentFixture<SitesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
