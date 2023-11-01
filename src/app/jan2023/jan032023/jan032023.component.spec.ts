import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan032023Component } from './jan032023.component';

describe('Jan032023Component', () => {
  let component: Jan032023Component;
  let fixture: ComponentFixture<Jan032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
