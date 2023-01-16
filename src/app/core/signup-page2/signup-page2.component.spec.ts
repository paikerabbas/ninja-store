import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPage2Component } from './signup-page2.component';

describe('SignupPage2Component', () => {
  let component: SignupPage2Component;
  let fixture: ComponentFixture<SignupPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
