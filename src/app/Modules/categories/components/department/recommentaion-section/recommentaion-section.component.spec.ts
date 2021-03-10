import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentaionSectionComponent } from './recommentaion-section.component';

describe('RecommentaionSectionComponent', () => {
  let component: RecommentaionSectionComponent;
  let fixture: ComponentFixture<RecommentaionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommentaionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommentaionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
