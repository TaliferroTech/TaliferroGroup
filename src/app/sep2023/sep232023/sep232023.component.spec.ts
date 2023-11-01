import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep232023Component } from './sep232023.component';

describe('Sep232023Component', () => {
  let component: Sep232023Component;
  let fixture: ComponentFixture<Sep232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
