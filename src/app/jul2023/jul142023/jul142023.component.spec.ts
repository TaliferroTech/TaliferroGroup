import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul142023Component } from './jul142023.component';

describe('Jul142023Component', () => {
  let component: Jul142023Component;
  let fixture: ComponentFixture<Jul142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
