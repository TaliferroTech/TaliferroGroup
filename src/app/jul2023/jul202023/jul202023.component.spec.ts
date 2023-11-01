import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul202023Component } from './jul202023.component';

describe('Jul202023Component', () => {
  let component: Jul202023Component;
  let fixture: ComponentFixture<Jul202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
