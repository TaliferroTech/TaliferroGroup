import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun062023Component } from './jun062023.component';

describe('Jun062023Component', () => {
  let component: Jun062023Component;
  let fixture: ComponentFixture<Jun062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
