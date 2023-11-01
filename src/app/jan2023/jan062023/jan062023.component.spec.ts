import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan062023Component } from './jan062023.component';

describe('Jan062023Component', () => {
  let component: Jan062023Component;
  let fixture: ComponentFixture<Jan062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
