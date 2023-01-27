import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenkurtasComponent } from './menkurtas.component';

describe('MenkurtasComponent', () => {
  let component: MenkurtasComponent;
  let fixture: ComponentFixture<MenkurtasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenkurtasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenkurtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
