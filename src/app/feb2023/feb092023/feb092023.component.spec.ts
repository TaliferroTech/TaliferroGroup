import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb092023Component } from './feb092023.component';

describe('Feb092023Component', () => {
  let component: Feb092023Component;
  let fixture: ComponentFixture<Feb092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
