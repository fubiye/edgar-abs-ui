import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingFileComponent } from './filing-file.component';

describe('FilingFileComponent', () => {
  let component: FilingFileComponent;
  let fixture: ComponentFixture<FilingFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
