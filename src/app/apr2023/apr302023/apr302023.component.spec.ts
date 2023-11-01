import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr302023Component } from './apr302023.component';

describe('Apr302023Component', () => {
  let component: Apr302023Component;
  let fixture: ComponentFixture<Apr302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
