import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun082023Component } from './jun082023.component';

describe('Jun082023Component', () => {
  let component: Jun082023Component;
  let fixture: ComponentFixture<Jun082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
