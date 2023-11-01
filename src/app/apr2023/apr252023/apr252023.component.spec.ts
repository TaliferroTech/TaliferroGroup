import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr252023Component } from './apr252023.component';

describe('Apr252023Component', () => {
  let component: Apr252023Component;
  let fixture: ComponentFixture<Apr252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
