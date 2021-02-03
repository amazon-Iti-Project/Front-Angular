import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTapsComponent } from './seller-taps.component';

describe('SellerTapsComponent', () => {
  let component: SellerTapsComponent;
  let fixture: ComponentFixture<SellerTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerTapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
