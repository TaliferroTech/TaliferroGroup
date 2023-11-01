import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar052023Component } from './mar052023.component';

describe('Mar052023Component', () => {
  let component: Mar052023Component;
  let fixture: ComponentFixture<Mar052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
