import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchaccessoriesDashboardComponent } from './watchaccessories-dashboard.component';

describe('WatchaccessoriesDashboardComponent', () => {
  let component: WatchaccessoriesDashboardComponent;
  let fixture: ComponentFixture<WatchaccessoriesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchaccessoriesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchaccessoriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
