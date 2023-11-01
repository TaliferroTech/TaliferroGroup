import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul222023Component } from './jul222023.component';

describe('Jul222023Component', () => {
  let component: Jul222023Component;
  let fixture: ComponentFixture<Jul222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
