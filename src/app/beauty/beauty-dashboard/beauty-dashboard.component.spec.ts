import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyDashboardComponent } from './beauty-dashboard.component';

describe('BeautyDashboardComponent', () => {
  let component: BeautyDashboardComponent;
  let fixture: ComponentFixture<BeautyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
