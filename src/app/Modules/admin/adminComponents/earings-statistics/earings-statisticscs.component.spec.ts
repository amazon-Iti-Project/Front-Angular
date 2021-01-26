import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringsStatisticscsComponent } from './earings-statisticscs.component';

describe('EaringsStatisticscsComponent', () => {
  let component: EaringsStatisticscsComponent;
  let fixture: ComponentFixture<EaringsStatisticscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaringsStatisticscsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaringsStatisticscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
