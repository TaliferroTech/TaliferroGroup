import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul242023Component } from './jul242023.component';

describe('Jul242023Component', () => {
  let component: Jul242023Component;
  let fixture: ComponentFixture<Jul242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
