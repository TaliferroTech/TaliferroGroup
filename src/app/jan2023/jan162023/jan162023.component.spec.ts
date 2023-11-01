import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan162023Component } from './jan162023.component';

describe('Jan162023Component', () => {
  let component: Jan162023Component;
  let fixture: ComponentFixture<Jan162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
