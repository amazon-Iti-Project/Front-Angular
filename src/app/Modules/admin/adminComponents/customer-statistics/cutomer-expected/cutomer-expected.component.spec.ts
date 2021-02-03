import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerExpectedComponent } from './cutomer-expected.component';

describe('CutomerExpectedComponent', () => {
  let component: CutomerExpectedComponent;
  let fixture: ComponentFixture<CutomerExpectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerExpectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerExpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
