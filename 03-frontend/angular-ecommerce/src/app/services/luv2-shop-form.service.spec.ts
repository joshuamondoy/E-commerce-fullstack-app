import { TestBed } from '@angular/core/testing';

import { Luv2ShopFromService } from './luv2-shop-form.service';

describe('Luv2ShopFromService', () => {
  let service: Luv2ShopFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Luv2ShopFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
