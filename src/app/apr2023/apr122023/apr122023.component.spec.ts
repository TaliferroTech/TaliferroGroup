import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr122023Component } from './apr122023.component';

describe('Apr122023Component', () => {
  let component: Apr122023Component;
  let fixture: ComponentFixture<Apr122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
