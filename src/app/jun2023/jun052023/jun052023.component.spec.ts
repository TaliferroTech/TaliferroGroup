import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun052023Component } from './jun052023.component';

describe('Jun052023Component', () => {
  let component: Jun052023Component;
  let fixture: ComponentFixture<Jun052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
