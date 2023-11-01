import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb112023Component } from './feb112023.component';

describe('Feb112023Component', () => {
  let component: Feb112023Component;
  let fixture: ComponentFixture<Feb112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
