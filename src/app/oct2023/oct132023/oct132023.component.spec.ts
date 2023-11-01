import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct132023Component } from './oct132023.component';

describe('Oct132023Component', () => {
  let component: Oct132023Component;
  let fixture: ComponentFixture<Oct132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
