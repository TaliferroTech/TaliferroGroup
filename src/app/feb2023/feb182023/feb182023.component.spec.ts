import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb182023Component } from './feb182023.component';

describe('Feb182023Component', () => {
  let component: Feb182023Component;
  let fixture: ComponentFixture<Feb182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
