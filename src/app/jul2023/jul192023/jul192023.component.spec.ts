import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul192023Component } from './jul192023.component';

describe('Jul192023Component', () => {
  let component: Jul192023Component;
  let fixture: ComponentFixture<Jul192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
