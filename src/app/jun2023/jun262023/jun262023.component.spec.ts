import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun262023Component } from './jun262023.component';

describe('Jun262023Component', () => {
  let component: Jun262023Component;
  let fixture: ComponentFixture<Jun262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
