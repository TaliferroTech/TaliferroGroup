import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan042023Component } from './jan042023.component';

describe('Jan042023Component', () => {
  let component: Jan042023Component;
  let fixture: ComponentFixture<Jan042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
