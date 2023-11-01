import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun212023Component } from './jun212023.component';

describe('Jun212023Component', () => {
  let component: Jun212023Component;
  let fixture: ComponentFixture<Jun212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
