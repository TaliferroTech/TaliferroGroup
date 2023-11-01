import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb082023Component } from './feb082023.component';

describe('Feb082023Component', () => {
  let component: Feb082023Component;
  let fixture: ComponentFixture<Feb082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
