import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr232023Component } from './apr232023.component';

describe('Apr232023Component', () => {
  let component: Apr232023Component;
  let fixture: ComponentFixture<Apr232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
