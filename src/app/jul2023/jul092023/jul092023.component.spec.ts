import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul092023Component } from './jul092023.component';

describe('Jul092023Component', () => {
  let component: Jul092023Component;
  let fixture: ComponentFixture<Jul092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
