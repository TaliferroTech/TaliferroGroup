import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul082023Component } from './jul082023.component';

describe('Jul082023Component', () => {
  let component: Jul082023Component;
  let fixture: ComponentFixture<Jul082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
