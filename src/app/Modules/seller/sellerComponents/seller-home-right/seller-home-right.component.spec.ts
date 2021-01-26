import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeRightComponent } from './seller-home-right.component';

describe('SellerHomeRightComponent', () => {
  let component: SellerHomeRightComponent;
  let fixture: ComponentFixture<SellerHomeRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHomeRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerHomeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
