import { TestBed } from '@angular/core/testing';

import { NewleadformServiceService } from './newleadform-service.service';

describe('NewleadformServiceService', () => {
  let service: NewleadformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewleadformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
