import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan272023Component } from './jan272023.component';

describe('Jan272023Component', () => {
  let component: Jan272023Component;
  let fixture: ComponentFixture<Jan272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
