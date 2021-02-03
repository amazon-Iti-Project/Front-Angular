import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerExpectedComponent } from './seller-expected.component';

describe('SellerExpectedComponent', () => {
  let component: SellerExpectedComponent;
  let fixture: ComponentFixture<SellerExpectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerExpectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerExpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
