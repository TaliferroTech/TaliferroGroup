import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb262023Component } from './feb262023.component';

describe('Feb262023Component', () => {
  let component: Feb262023Component;
  let fixture: ComponentFixture<Feb262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
