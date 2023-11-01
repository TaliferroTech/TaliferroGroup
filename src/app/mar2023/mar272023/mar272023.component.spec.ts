import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar272023Component } from './mar272023.component';

describe('Mar272023Component', () => {
  let component: Mar272023Component;
  let fixture: ComponentFixture<Mar272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
