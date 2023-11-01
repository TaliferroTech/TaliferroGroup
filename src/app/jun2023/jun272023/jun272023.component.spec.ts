import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun272023Component } from './jun272023.component';

describe('Jun272023Component', () => {
  let component: Jun272023Component;
  let fixture: ComponentFixture<Jun272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
