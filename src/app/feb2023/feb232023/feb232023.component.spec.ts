import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb232023Component } from './feb232023.component';

describe('Feb232023Component', () => {
  let component: Feb232023Component;
  let fixture: ComponentFixture<Feb232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
