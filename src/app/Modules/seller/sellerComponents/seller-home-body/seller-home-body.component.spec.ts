import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeBodyComponent } from './seller-home-body.component';

describe('SellerHomeBodyComponent', () => {
  let component: SellerHomeBodyComponent;
  let fixture: ComponentFixture<SellerHomeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHomeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
