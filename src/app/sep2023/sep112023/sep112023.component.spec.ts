import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep112023Component } from './sep112023.component';

describe('Sep112023Component', () => {
  let component: Sep112023Component;
  let fixture: ComponentFixture<Sep112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
