import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenFootwearDashboardComponent } from './menfootwear-dashboard.component';

describe('MenwearDashboardComponent', () => {
  let component: MenFootwearDashboardComponent;
  let fixture: ComponentFixture<MenFootwearDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenFootwearDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenFootwearDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});