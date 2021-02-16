import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeAuthenticatedComponent } from './admin-home-authenticated.component';

describe('AdminHomeAuthenticatedComponent', () => {
  let component: AdminHomeAuthenticatedComponent;
  let fixture: ComponentFixture<AdminHomeAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
