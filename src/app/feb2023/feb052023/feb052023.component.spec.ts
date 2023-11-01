import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb052023Component } from './feb052023.component';

describe('Feb052023Component', () => {
  let component: Feb052023Component;
  let fixture: ComponentFixture<Feb052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
