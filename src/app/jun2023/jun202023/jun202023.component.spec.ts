import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun202023Component } from './jun202023.component';

describe('Jun202023Component', () => {
  let component: Jun202023Component;
  let fixture: ComponentFixture<Jun202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
