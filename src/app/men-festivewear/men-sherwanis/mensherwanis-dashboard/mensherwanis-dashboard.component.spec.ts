import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensherwanisDashboardComponent } from './mensherwanis-dashboard.component';

describe('MensherwanisDashboardComponent', () => {
  let component: MensherwanisDashboardComponent;
  let fixture: ComponentFixture<MensherwanisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensherwanisDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensherwanisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
