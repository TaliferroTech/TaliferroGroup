import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep022023Component } from './sep022023.component';

describe('Sep022023Component', () => {
  let component: Sep022023Component;
  let fixture: ComponentFixture<Sep022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
