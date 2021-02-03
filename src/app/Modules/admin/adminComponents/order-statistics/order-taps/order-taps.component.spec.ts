import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTapsComponent } from './order-taps.component';

describe('OrderTapsComponent', () => {
  let component: OrderTapsComponent;
  let fixture: ComponentFixture<OrderTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
