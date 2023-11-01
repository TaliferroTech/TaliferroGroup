import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb192023Component } from './feb192023.component';

describe('Feb192023Component', () => {
  let component: Feb192023Component;
  let fixture: ComponentFixture<Feb192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
