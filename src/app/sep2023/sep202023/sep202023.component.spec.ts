import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep202023Component } from './sep202023.component';

describe('Sep202023Component', () => {
  let component: Sep202023Component;
  let fixture: ComponentFixture<Sep202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
