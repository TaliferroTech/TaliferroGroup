import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep102023Component } from './sep102023.component';

describe('Sep102023Component', () => {
  let component: Sep102023Component;
  let fixture: ComponentFixture<Sep102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
