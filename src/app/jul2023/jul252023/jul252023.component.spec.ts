import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul252023Component } from './jul252023.component';

describe('Jul252023Component', () => {
  let component: Jul252023Component;
  let fixture: ComponentFixture<Jul252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
