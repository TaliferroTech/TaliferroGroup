import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan242023Component } from './jan242023.component';

describe('Jan242023Component', () => {
  let component: Jan242023Component;
  let fixture: ComponentFixture<Jan242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
