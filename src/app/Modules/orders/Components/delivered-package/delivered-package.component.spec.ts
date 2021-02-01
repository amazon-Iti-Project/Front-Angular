import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredPackageComponent } from './delivered-package.component';

describe('DeliveredPackageComponent', () => {
  let component: DeliveredPackageComponent;
  let fixture: ComponentFixture<DeliveredPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
