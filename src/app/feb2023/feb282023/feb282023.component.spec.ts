import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb282023Component } from './feb282023.component';

describe('Feb282023Component', () => {
  let component: Feb282023Component;
  let fixture: ComponentFixture<Feb282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
