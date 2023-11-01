import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr132023Component } from './apr132023.component';

describe('Apr132023Component', () => {
  let component: Apr132023Component;
  let fixture: ComponentFixture<Apr132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
