import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep052023Component } from './sep052023.component';

describe('Sep052023Component', () => {
  let component: Sep052023Component;
  let fixture: ComponentFixture<Sep052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
