import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul112023Component } from './jul112023.component';

describe('Jul112023Component', () => {
  let component: Jul112023Component;
  let fixture: ComponentFixture<Jul112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
