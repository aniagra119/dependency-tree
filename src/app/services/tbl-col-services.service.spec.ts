import { TestBed } from '@angular/core/testing';

import { TblColServicesService } from './tbl-col-services.service';

describe('TblColServicesService', () => {
  let service: TblColServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TblColServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
