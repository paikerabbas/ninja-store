import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjeansDashboardComponent } from './menjeans-dashboard.component';

describe('MenjeansDashboardComponent', () => {
  let component: MenjeansDashboardComponent;
  let fixture: ComponentFixture<MenjeansDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenjeansDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenjeansDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
