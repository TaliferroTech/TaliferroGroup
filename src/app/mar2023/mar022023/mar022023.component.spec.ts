import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar022023Component } from './mar022023.component';

describe('Mar022023Component', () => {
  let component: Mar022023Component;
  let fixture: ComponentFixture<Mar022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
