import { TestBed } from '@angular/core/testing';

import { ThinkService } from './think.service';

describe('ThinkService', () => {
  let service: ThinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
