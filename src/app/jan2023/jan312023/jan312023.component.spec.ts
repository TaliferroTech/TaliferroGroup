import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan312023Component } from './jan312023.component';

describe('Jan312023Component', () => {
  let component: Jan312023Component;
  let fixture: ComponentFixture<Jan312023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan312023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan312023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
