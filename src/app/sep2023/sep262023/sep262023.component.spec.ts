import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep262023Component } from './sep262023.component';

describe('Sep262023Component', () => {
  let component: Sep262023Component;
  let fixture: ComponentFixture<Sep262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
