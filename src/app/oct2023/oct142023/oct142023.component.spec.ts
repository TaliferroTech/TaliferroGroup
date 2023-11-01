import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct142023Component } from './oct142023.component';

describe('Oct142023Component', () => {
  let component: Oct142023Component;
  let fixture: ComponentFixture<Oct142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
