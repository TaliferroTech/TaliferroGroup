import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar252023Component } from './mar252023.component';

describe('Mar252023Component', () => {
  let component: Mar252023Component;
  let fixture: ComponentFixture<Mar252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
