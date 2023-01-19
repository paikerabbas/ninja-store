import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenwearDashboardComponent } from './womenwear-dashboard.component';

describe('WomenwearDashboardComponent', () => {
  let component: WomenwearDashboardComponent;
  let fixture: ComponentFixture<WomenwearDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenwearDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenwearDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
