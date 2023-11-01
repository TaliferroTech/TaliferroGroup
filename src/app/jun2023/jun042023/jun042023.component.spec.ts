import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun042023Component } from './jun042023.component';

describe('Jun042023Component', () => {
  let component: Jun042023Component;
  let fixture: ComponentFixture<Jun042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
