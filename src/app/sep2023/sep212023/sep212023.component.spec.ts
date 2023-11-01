import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep212023Component } from './sep212023.component';

describe('Sep212023Component', () => {
  let component: Sep212023Component;
  let fixture: ComponentFixture<Sep212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
