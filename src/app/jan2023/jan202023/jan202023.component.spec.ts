import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan202023Component } from './jan202023.component';

describe('Jan202023Component', () => {
  let component: Jan202023Component;
  let fixture: ComponentFixture<Jan202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
