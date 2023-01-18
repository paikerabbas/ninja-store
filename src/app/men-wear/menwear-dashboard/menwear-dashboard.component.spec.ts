import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenwearDashboardComponent } from './menwear-dashboard.component';

describe('MenwearDashboardComponent', () => {
  let component: MenwearDashboardComponent;
  let fixture: ComponentFixture<MenwearDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenwearDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenwearDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
