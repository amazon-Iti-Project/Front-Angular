import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedOrderComponent } from './archived-order.component';

describe('ArchivedOrderComponent', () => {
  let component: ArchivedOrderComponent;
  let fixture: ComponentFixture<ArchivedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
