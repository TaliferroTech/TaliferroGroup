import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul272023Component } from './jul272023.component';

describe('Jul272023Component', () => {
  let component: Jul272023Component;
  let fixture: ComponentFixture<Jul272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
