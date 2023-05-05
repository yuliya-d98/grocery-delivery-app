import { TestBed } from '@angular/core/testing';

import { MainPageHttpService } from './main-page.http.service';

describe('MainPageHttpService', () => {
  let service: MainPageHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
