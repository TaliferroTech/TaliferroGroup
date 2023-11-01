import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct292023Component } from './oct292023.component';

describe('Oct292023Component', () => {
  let component: Oct292023Component;
  let fixture: ComponentFixture<Oct292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
