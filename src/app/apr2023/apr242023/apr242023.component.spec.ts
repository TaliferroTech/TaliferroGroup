import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr242023Component } from './apr242023.component';

describe('Apr242023Component', () => {
  let component: Apr242023Component;
  let fixture: ComponentFixture<Apr242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
