import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeLeftComponent } from './seller-home-left.component';

describe('SellerHomeLeftComponent', () => {
  let component: SellerHomeLeftComponent;
  let fixture: ComponentFixture<SellerHomeLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHomeLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHomeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
