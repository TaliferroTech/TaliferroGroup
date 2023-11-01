import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr152023Component } from './apr152023.component';

describe('Apr152023Component', () => {
  let component: Apr152023Component;
  let fixture: ComponentFixture<Apr152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
