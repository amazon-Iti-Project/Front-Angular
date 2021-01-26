import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStatisticscsComponent } from './customer-statisticscs.component';

describe('CustomerStatisticscsComponent', () => {
  let component: CustomerStatisticscsComponent;
  let fixture: ComponentFixture<CustomerStatisticscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerStatisticscsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStatisticscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
