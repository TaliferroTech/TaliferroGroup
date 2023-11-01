import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun092023Component } from './jun092023.component';

describe('Jun092023Component', () => {
  let component: Jun092023Component;
  let fixture: ComponentFixture<Jun092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
