import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr102023Component } from './apr102023.component';

describe('Apr102023Component', () => {
  let component: Apr102023Component;
  let fixture: ComponentFixture<Apr102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
