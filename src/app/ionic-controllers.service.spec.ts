import { TestBed } from '@angular/core/testing';

import { IonicControllersService } from './ionic-controllers.service';

describe('IonicControllersService', () => {
  let service: IonicControllersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicControllersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
