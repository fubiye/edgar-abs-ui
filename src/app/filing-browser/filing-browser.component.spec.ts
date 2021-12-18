import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingBrowserComponent } from './filing-browser.component';

describe('FilingBrowserComponent', () => {
  let component: FilingBrowserComponent;
  let fixture: ComponentFixture<FilingBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
