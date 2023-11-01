import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan132023Component } from './jan132023.component';

describe('Jan132023Component', () => {
  let component: Jan132023Component;
  let fixture: ComponentFixture<Jan132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
