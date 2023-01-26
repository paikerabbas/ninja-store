import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenrainjacketDashboardComponent } from './menrainjacket-dashboard.component';

describe('MenrainjacketDashboardComponent', () => {
  let component: MenrainjacketDashboardComponent;
  let fixture: ComponentFixture<MenrainjacketDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenrainjacketDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenrainjacketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
