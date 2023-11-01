import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar072023Component } from './mar072023.component';

describe('Mar072023Component', () => {
  let component: Mar072023Component;
  let fixture: ComponentFixture<Mar072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
