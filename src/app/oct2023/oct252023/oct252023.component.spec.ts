import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct252023Component } from './oct252023.component';

describe('Oct252023Component', () => {
  let component: Oct252023Component;
  let fixture: ComponentFixture<Oct252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
