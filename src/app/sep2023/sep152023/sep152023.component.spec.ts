import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep152023Component } from './sep152023.component';

describe('Sep152023Component', () => {
  let component: Sep152023Component;
  let fixture: ComponentFixture<Sep152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
