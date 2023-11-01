import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar122023Component } from './mar122023.component';

describe('Mar122023Component', () => {
  let component: Mar122023Component;
  let fixture: ComponentFixture<Mar122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
