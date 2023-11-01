import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb122023Component } from './feb122023.component';

describe('Feb122023Component', () => {
  let component: Feb122023Component;
  let fixture: ComponentFixture<Feb122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
