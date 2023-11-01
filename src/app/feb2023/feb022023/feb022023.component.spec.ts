import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb022023Component } from './feb022023.component';

describe('Feb022023Component', () => {
  let component: Feb022023Component;
  let fixture: ComponentFixture<Feb022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
