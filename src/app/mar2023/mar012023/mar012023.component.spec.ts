import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar012023Component } from './mar012023.component';

describe('Mar012023Component', () => {
  let component: Mar012023Component;
  let fixture: ComponentFixture<Mar012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
