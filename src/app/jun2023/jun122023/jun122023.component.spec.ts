import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun122023Component } from './jun122023.component';

describe('Jun122023Component', () => {
  let component: Jun122023Component;
  let fixture: ComponentFixture<Jun122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
