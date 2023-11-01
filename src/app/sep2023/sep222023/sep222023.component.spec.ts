import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep222023Component } from './sep222023.component';

describe('Sep222023Component', () => {
  let component: Sep222023Component;
  let fixture: ComponentFixture<Sep222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
