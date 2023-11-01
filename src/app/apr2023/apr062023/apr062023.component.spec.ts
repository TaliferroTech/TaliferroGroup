import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr062023Component } from './apr062023.component';

describe('Apr062023Component', () => {
  let component: Apr062023Component;
  let fixture: ComponentFixture<Apr062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
