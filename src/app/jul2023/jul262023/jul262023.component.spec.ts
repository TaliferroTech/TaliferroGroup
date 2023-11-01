import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul262023Component } from './jul262023.component';

describe('Jul262023Component', () => {
  let component: Jul262023Component;
  let fixture: ComponentFixture<Jul262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
