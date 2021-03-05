import { TestBed } from '@angular/core/testing';

import { NgxScrollspyService } from './ngx-scrollspy.service';

describe('NgxScrollspyService', () => {
  let service: NgxScrollspyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScrollspyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
