import { TestBed } from '@angular/core/testing';

import { PhotoLibraryService } from './photo-library.service';

describe('PhotoLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoLibraryService = TestBed.get(PhotoLibraryService);
    expect(service).toBeTruthy();
  });
});
