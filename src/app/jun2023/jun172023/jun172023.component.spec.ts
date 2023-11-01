import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun172023Component } from './jun172023.component';

describe('Jun172023Component', () => {
  let component: Jun172023Component;
  let fixture: ComponentFixture<Jun172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
