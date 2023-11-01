import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun282023Component } from './jun282023.component';

describe('Jun282023Component', () => {
  let component: Jun282023Component;
  let fixture: ComponentFixture<Jun282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
