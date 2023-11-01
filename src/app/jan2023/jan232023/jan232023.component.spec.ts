import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan232023Component } from './jan232023.component';

describe('Jan232023Component', () => {
  let component: Jan232023Component;
  let fixture: ComponentFixture<Jan232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
