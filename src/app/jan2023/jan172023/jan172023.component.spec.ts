import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan172023Component } from './jan172023.component';

describe('Jan172023Component', () => {
  let component: Jan172023Component;
  let fixture: ComponentFixture<Jan172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
