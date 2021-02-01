import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTrackComponent } from './package-track.component';

describe('PackageTrackComponent', () => {
  let component: PackageTrackComponent;
  let fixture: ComponentFixture<PackageTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
