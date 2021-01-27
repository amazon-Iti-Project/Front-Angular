import { TestBed } from '@angular/core/testing';

import { CategoriesJSONService } from './categories-json.service';

describe('CategoriesJSONService', () => {
  let service: CategoriesJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
