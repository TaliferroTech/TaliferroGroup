import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep162023Component } from './sep162023.component';

describe('Sep162023Component', () => {
  let component: Sep162023Component;
  let fixture: ComponentFixture<Sep162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
