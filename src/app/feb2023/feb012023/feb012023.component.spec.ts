import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb012023Component } from './feb012023.component';

describe('Feb012023Component', () => {
  let component: Feb012023Component;
  let fixture: ComponentFixture<Feb012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
