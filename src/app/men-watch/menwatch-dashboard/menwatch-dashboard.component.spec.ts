import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenwatchDashboardComponent } from './menwatch-dashboard.component';

describe('MenwatchDashboardComponent', () => {
  let component: MenwatchDashboardComponent;
  let fixture: ComponentFixture<MenwatchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenwatchDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenwatchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
