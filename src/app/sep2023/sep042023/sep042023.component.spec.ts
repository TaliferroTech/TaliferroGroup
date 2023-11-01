import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep042023Component } from './sep042023.component';

describe('Sep042023Component', () => {
  let component: Sep042023Component;
  let fixture: ComponentFixture<Sep042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
