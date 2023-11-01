import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep122023Component } from './sep122023.component';

describe('Sep122023Component', () => {
  let component: Sep122023Component;
  let fixture: ComponentFixture<Sep122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
