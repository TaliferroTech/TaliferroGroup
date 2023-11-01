import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar092023Component } from './mar092023.component';

describe('Mar092023Component', () => {
  let component: Mar092023Component;
  let fixture: ComponentFixture<Mar092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
