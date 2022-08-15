import { TestBed } from '@angular/core/testing';

import { GraphServicesService } from './graph-services.service';

describe('GraphServicesService', () => {
  let service: GraphServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
