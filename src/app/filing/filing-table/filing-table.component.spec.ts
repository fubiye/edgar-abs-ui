import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingTableComponent } from './filing-table.component';

describe('FilingTableComponent', () => {
  let component: FilingTableComponent;
  let fixture: ComponentFixture<FilingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
