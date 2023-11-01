import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep192023Component } from './sep192023.component';

describe('Sep192023Component', () => {
  let component: Sep192023Component;
  let fixture: ComponentFixture<Sep192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
