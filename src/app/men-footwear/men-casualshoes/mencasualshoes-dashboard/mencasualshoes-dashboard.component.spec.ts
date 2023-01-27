import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MencasualshoesDashboardComponent } from './mencasualshoes-dashboard.component';

describe('MencasualshoesDashboardComponent', () => {
  let component: MencasualshoesDashboardComponent;
  let fixture: ComponentFixture<MencasualshoesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MencasualshoesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MencasualshoesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
