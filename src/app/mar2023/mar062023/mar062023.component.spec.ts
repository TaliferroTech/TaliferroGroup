import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar062023Component } from './mar062023.component';

describe('Mar062023Component', () => {
  let component: Mar062023Component;
  let fixture: ComponentFixture<Mar062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
