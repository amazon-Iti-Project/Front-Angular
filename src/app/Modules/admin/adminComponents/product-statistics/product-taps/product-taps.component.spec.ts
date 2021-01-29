import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTapsComponent } from './product-taps.component';

describe('ProductTapsComponent', () => {
  let component: ProductTapsComponent;
  let fixture: ComponentFixture<ProductTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
