import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May272023Component } from './may272023.component';

describe('May272023Component', () => {
  let component: May272023Component;
  let fixture: ComponentFixture<May272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
