import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan252023Component } from './jan252023.component';

describe('Jan252023Component', () => {
  let component: Jan252023Component;
  let fixture: ComponentFixture<Jan252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
