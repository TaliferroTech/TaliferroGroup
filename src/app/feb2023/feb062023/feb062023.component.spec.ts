import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb062023Component } from './feb062023.component';

describe('Feb062023Component', () => {
  let component: Feb062023Component;
  let fixture: ComponentFixture<Feb062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
