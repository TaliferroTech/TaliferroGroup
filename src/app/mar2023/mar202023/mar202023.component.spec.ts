import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar202023Component } from './mar202023.component';

describe('Mar202023Component', () => {
  let component: Mar202023Component;
  let fixture: ComponentFixture<Mar202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
