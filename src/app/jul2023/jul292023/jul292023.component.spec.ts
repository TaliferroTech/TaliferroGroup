import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul292023Component } from './jul292023.component';

describe('Jul292023Component', () => {
  let component: Jul292023Component;
  let fixture: ComponentFixture<Jul292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
