import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerManageInventoryComponent } from './seller-manage-inventory.component';

describe('SellerManageInventoryComponent', () => {
  let component: SellerManageInventoryComponent;
  let fixture: ComponentFixture<SellerManageInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerManageInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerManageInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
