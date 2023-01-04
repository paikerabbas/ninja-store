import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductPageComponent } from './select-product-page.component';

describe('SelectProductPageComponent', () => {
  let component: SelectProductPageComponent;
  let fixture: ComponentFixture<SelectProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
