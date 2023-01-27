import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensweatersDashboardComponent } from './mensweaters-dashboard.component';

describe('MensweatersDashboardComponent', () => {
  let component: MensweatersDashboardComponent;
  let fixture: ComponentFixture<MensweatersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensweatersDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensweatersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
