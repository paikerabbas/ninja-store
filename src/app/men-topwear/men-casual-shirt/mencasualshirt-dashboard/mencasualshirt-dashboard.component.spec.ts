import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MencasualshirtDashboardComponent } from './mencasualshirt-dashboard.component';

describe('MencasualshirtDashboardComponent', () => {
  let component: MencasualshirtDashboardComponent;
  let fixture: ComponentFixture<MencasualshirtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MencasualshirtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MencasualshirtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
