import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep282023Component } from './sep282023.component';

describe('Sep282023Component', () => {
  let component: Sep282023Component;
  let fixture: ComponentFixture<Sep282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
