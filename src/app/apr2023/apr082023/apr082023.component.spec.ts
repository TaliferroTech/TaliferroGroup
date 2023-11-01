import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr082023Component } from './apr082023.component';

describe('Apr082023Component', () => {
  let component: Apr082023Component;
  let fixture: ComponentFixture<Apr082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
