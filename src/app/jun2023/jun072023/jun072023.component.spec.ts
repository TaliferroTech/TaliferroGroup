import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun072023Component } from './jun072023.component';

describe('Jun072023Component', () => {
  let component: Jun072023Component;
  let fixture: ComponentFixture<Jun072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
