import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenDashboardComponent } from './men-dashboard.component';

describe('MenDashboardComponent', () => {
  let component: MenDashboardComponent;
  let fixture: ComponentFixture<MenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
