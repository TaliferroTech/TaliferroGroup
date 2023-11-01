import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul282023Component } from './jul282023.component';

describe('Jul282023Component', () => {
  let component: Jul282023Component;
  let fixture: ComponentFixture<Jul282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
