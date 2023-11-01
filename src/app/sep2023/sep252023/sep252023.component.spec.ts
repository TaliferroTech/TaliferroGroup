import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep252023Component } from './sep252023.component';

describe('Sep252023Component', () => {
  let component: Sep252023Component;
  let fixture: ComponentFixture<Sep252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
