import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun232023Component } from './jun232023.component';

describe('Jun232023Component', () => {
  let component: Jun232023Component;
  let fixture: ComponentFixture<Jun232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
