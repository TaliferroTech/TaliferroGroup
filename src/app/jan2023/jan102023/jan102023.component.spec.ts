import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan102023Component } from './jan102023.component';

describe('Jan102023Component', () => {
  let component: Jan102023Component;
  let fixture: ComponentFixture<Jan102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
