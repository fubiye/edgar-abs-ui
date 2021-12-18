import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingByYearComponent } from './filing-by-year.component';

describe('FilingByYearComponent', () => {
  let component: FilingByYearComponent;
  let fixture: ComponentFixture<FilingByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingByYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
