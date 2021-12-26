import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingSingleComponent } from './filing-single.component';

describe('FilingSingleComponent', () => {
  let component: FilingSingleComponent;
  let fixture: ComponentFixture<FilingSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
