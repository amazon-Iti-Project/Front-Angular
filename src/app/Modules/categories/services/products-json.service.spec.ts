import { TestBed } from '@angular/core/testing';

import { ProductsJsonService } from './products-json.service';

describe('ProductsJsonService', () => {
  let service: ProductsJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
