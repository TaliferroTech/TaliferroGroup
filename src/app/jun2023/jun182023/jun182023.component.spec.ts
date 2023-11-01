import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun182023Component } from './jun182023.component';

describe('Jun182023Component', () => {
  let component: Jun182023Component;
  let fixture: ComponentFixture<Jun182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
