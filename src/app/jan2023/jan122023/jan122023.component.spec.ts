import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan122023Component } from './jan122023.component';

describe('Jan122023Component', () => {
  let component: Jan122023Component;
  let fixture: ComponentFixture<Jan122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
