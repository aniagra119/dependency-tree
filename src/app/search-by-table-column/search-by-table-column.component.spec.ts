import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTableColumnComponent } from './search-by-table-column.component';

describe('SearchByTableColumnComponent', () => {
  let component: SearchByTableColumnComponent;
  let fixture: ComponentFixture<SearchByTableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
