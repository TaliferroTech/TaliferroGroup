import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May292023Component } from './may292023.component';

describe('May292023Component', () => {
  let component: May292023Component;
  let fixture: ComponentFixture<May292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
