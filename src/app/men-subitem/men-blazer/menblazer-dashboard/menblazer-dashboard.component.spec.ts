import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenblazerDashboardComponent } from './menblazer-dashboard.component';

describe('MenblazerDashboardComponent', () => {
  let component: MenblazerDashboardComponent;
  let fixture: ComponentFixture<MenblazerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenblazerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenblazerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
