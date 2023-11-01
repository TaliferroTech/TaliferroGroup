import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar082023Component } from './mar082023.component';

describe('Mar082023Component', () => {
  let component: Mar082023Component;
  let fixture: ComponentFixture<Mar082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
