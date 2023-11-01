import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul052023Component } from './jul052023.component';

describe('Jul052023Component', () => {
  let component: Jul052023Component;
  let fixture: ComponentFixture<Jul052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
