import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep242023Component } from './sep242023.component';

describe('Sep242023Component', () => {
  let component: Sep242023Component;
  let fixture: ComponentFixture<Sep242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
