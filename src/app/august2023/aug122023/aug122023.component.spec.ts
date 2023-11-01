import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug122023Component } from './aug122023.component';

describe('Aug122023Component', () => {
  let component: Aug122023Component;
  let fixture: ComponentFixture<Aug122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
