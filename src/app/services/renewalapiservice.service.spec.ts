import { TestBed } from '@angular/core/testing';

import { RenewalapiserviceService } from './renewalapiservice.service';

describe('RenewalapiserviceService', () => {
  let service: RenewalapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewalapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
