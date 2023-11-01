import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar112023Component } from './mar112023.component';

describe('Mar112023Component', () => {
  let component: Mar112023Component;
  let fixture: ComponentFixture<Mar112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
