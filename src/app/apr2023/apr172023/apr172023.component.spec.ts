import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr172023Component } from './apr172023.component';

describe('Apr172023Component', () => {
  let component: Apr172023Component;
  let fixture: ComponentFixture<Apr172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
