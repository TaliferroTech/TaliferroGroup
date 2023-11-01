import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun252023Component } from './jun252023.component';

describe('Jun252023Component', () => {
  let component: Jun252023Component;
  let fixture: ComponentFixture<Jun252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
