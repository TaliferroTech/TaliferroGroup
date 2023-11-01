import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr012023Component } from './apr012023.component';

describe('Apr012023Component', () => {
  let component: Apr012023Component;
  let fixture: ComponentFixture<Apr012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
