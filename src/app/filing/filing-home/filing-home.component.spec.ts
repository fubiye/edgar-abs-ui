import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingHomeComponent } from './filing-home.component';

describe('FilingHomeComponent', () => {
  let component: FilingHomeComponent;
  let fixture: ComponentFixture<FilingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
