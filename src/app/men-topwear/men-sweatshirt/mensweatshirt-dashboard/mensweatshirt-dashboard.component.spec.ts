import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensweatshirtDashboardComponent } from './mensweatshirt-dashboard.component';

describe('MensweatshirtDashboardComponent', () => {
  let component: MensweatshirtDashboardComponent;
  let fixture: ComponentFixture<MensweatshirtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensweatshirtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensweatshirtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
