import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun012023Component } from './jun012023.component';

describe('Jun012023Component', () => {
  let component: Jun012023Component;
  let fixture: ComponentFixture<Jun012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
