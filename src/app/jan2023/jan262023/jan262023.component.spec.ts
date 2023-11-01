import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan262023Component } from './jan262023.component';

describe('Jan262023Component', () => {
  let component: Jan262023Component;
  let fixture: ComponentFixture<Jan262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
