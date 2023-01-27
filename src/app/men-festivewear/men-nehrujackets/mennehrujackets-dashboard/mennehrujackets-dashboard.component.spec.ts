import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MennehrujacketsDashboardComponent } from './mennehrujackets-dashboard.component';

describe('MennehrujacketsDashboardComponent', () => {
  let component: MennehrujacketsDashboardComponent;
  let fixture: ComponentFixture<MennehrujacketsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MennehrujacketsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MennehrujacketsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
