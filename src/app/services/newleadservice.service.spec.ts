import { TestBed } from '@angular/core/testing';

import { NewleadserviceService } from './newleadservice.service';

describe('NewleadserviceService', () => {
  let service: NewleadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewleadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
