import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep142023Component } from './sep142023.component';

describe('Sep142023Component', () => {
  let component: Sep142023Component;
  let fixture: ComponentFixture<Sep142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
