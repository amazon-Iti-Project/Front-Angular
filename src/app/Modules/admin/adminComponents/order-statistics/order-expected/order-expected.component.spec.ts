import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderExpectedComponent } from './order-expected.component';

describe('OrderExpectedComponent', () => {
  let component: OrderExpectedComponent;
  let fixture: ComponentFixture<OrderExpectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderExpectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderExpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
