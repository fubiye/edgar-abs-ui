import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingStatusComponent } from './filing-status.component';

describe('FilingStatusComponent', () => {
  let component: FilingStatusComponent;
  let fixture: ComponentFixture<FilingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
