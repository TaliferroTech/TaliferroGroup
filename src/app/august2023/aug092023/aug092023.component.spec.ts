import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug092023Component } from './aug092023.component';

describe('Aug092023Component', () => {
  let component: Aug092023Component;
  let fixture: ComponentFixture<Aug092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
