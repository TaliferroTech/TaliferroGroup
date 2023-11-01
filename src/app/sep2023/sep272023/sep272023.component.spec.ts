import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep272023Component } from './sep272023.component';

describe('Sep272023Component', () => {
  let component: Sep272023Component;
  let fixture: ComponentFixture<Sep272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
