import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep302023Component } from './sep302023.component';

describe('Sep302023Component', () => {
  let component: Sep302023Component;
  let fixture: ComponentFixture<Sep302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
