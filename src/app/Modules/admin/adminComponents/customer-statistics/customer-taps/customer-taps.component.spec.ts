import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTapsComponent } from './customer-taps.component';

describe('CustomerTapsComponent', () => {
  let component: CustomerTapsComponent;
  let fixture: ComponentFixture<CustomerTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
