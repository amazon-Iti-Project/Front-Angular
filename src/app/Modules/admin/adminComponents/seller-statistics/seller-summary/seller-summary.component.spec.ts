import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSummaryComponent } from './seller-summary.component';

describe('SellerSummaryComponent', () => {
  let component: SellerSummaryComponent;
  let fixture: ComponentFixture<SellerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
