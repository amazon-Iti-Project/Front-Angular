import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatisticscsComponent } from './order-statisticscs.component';

describe('OrderStatisticscsComponent', () => {
  let component: OrderStatisticscsComponent;
  let fixture: ComponentFixture<OrderStatisticscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatisticscsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatisticscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
