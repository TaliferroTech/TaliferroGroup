import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb042023Component } from './feb042023.component';

describe('Feb042023Component', () => {
  let component: Feb042023Component;
  let fixture: ComponentFixture<Feb042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
