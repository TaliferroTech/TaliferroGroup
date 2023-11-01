import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul062023Component } from './jul062023.component';

describe('Jul062023Component', () => {
  let component: Jul062023Component;
  let fixture: ComponentFixture<Jul062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
