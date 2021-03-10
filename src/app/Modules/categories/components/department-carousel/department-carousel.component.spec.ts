import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCarouselComponent } from './department-carousel.component';

describe('DepartmentCarouselComponent', () => {
  let component: DepartmentCarouselComponent;
  let fixture: ComponentFixture<DepartmentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
