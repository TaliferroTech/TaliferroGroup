import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun302023Component } from './jun302023.component';

describe('Jun302023Component', () => {
  let component: Jun302023Component;
  let fixture: ComponentFixture<Jun302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
