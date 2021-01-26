import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeHeaderComponent } from './seller-home-header.component';

describe('SellerHomeHeaderComponent', () => {
  let component: SellerHomeHeaderComponent;
  let fixture: ComponentFixture<SellerHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHomeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
