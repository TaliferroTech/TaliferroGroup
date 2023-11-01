import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr142023Component } from './apr142023.component';

describe('Apr142023Component', () => {
  let component: Apr142023Component;
  let fixture: ComponentFixture<Apr142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
