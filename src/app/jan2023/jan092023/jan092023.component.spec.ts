import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan092023Component } from './jan092023.component';

describe('Jan092023Component', () => {
  let component: Jan092023Component;
  let fixture: ComponentFixture<Jan092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
