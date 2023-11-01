import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug242023Component } from './aug242023.component';

describe('Aug242023Component', () => {
  let component: Aug242023Component;
  let fixture: ComponentFixture<Aug242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
