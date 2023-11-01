import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb132023Component } from './feb132023.component';

describe('Feb132023Component', () => {
  let component: Feb132023Component;
  let fixture: ComponentFixture<Feb132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
