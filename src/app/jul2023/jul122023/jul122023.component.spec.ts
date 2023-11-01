import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul122023Component } from './jul122023.component';

describe('Jul122023Component', () => {
  let component: Jul122023Component;
  let fixture: ComponentFixture<Jul122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
