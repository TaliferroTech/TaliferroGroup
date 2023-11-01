import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan052023Component } from './jan052023.component';

describe('Jan052023Component', () => {
  let component: Jan052023Component;
  let fixture: ComponentFixture<Jan052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
