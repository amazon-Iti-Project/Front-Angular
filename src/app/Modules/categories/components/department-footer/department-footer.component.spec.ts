import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFooterComponent } from './department-footer.component';

describe('DepartmentFooterComponent', () => {
  let component: DepartmentFooterComponent;
  let fixture: ComponentFixture<DepartmentFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
