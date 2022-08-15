import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByDirectoryComponent } from './search-by-directory.component';

describe('SearchByDirectoryComponent', () => {
  let component: SearchByDirectoryComponent;
  let fixture: ComponentFixture<SearchByDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
