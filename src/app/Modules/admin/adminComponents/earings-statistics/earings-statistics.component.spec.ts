import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringsStatisticsComponent } from './earings-statistics.component';

describe('EaringsStatisticsComponent', () => {
  let component: EaringsStatisticsComponent;
  let fixture: ComponentFixture<EaringsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaringsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaringsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
