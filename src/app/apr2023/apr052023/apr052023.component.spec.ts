import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr052023Component } from './apr052023.component';

describe('Apr052023Component', () => {
  let component: Apr052023Component;
  let fixture: ComponentFixture<Apr052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
