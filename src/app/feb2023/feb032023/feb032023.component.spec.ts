import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb032023Component } from './feb032023.component';

describe('Feb032023Component', () => {
  let component: Feb032023Component;
  let fixture: ComponentFixture<Feb032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
