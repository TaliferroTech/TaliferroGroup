import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul022023Component } from './jul022023.component';

describe('Jul022023Component', () => {
  let component: Jul022023Component;
  let fixture: ComponentFixture<Jul022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
