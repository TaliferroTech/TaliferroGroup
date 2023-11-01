import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun152023Component } from './jun152023.component';

describe('Jun152023Component', () => {
  let component: Jun152023Component;
  let fixture: ComponentFixture<Jun152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
