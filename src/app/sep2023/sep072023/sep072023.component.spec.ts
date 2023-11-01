import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep072023Component } from './sep072023.component';

describe('Sep072023Component', () => {
  let component: Sep072023Component;
  let fixture: ComponentFixture<Sep072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
