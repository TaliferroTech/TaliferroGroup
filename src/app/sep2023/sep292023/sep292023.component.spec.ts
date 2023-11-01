import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep292023Component } from './sep292023.component';

describe('Sep292023Component', () => {
  let component: Sep292023Component;
  let fixture: ComponentFixture<Sep292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
