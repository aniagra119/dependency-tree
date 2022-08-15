import { TestBed } from '@angular/core/testing';

import { DirServicesService } from './dir-services.service';

describe('DirServicesService', () => {
  let service: DirServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
