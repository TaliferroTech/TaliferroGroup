import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan302023Component } from './jan302023.component';

describe('Jan302023Component', () => {
  let component: Jan302023Component;
  let fixture: ComponentFixture<Jan302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
