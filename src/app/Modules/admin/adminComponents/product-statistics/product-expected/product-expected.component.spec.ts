import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExpectedComponent } from './product-expected.component';

describe('ProductExpectedComponent', () => {
  let component: ProductExpectedComponent;
  let fixture: ComponentFixture<ProductExpectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductExpectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductExpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
