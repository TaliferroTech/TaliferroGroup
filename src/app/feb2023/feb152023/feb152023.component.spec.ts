import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb152023Component } from './feb152023.component';

describe('Feb152023Component', () => {
  let component: Feb152023Component;
  let fixture: ComponentFixture<Feb152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
