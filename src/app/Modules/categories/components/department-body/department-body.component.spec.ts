import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentBodyComponent } from './department-body.component';

describe('DepartmentBodyComponent', () => {
  let component: DepartmentBodyComponent;
  let fixture: ComponentFixture<DepartmentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
