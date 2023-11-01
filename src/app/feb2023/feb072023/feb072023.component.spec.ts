import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb072023Component } from './feb072023.component';

describe('Feb072023Component', () => {
  let component: Feb072023Component;
  let fixture: ComponentFixture<Feb072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
