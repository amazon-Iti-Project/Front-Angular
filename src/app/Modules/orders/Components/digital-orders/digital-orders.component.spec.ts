import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOrdersComponent } from './digital-orders.component';

describe('DigitalOrdersComponent', () => {
  let component: DigitalOrdersComponent;
  let fixture: ComponentFixture<DigitalOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
