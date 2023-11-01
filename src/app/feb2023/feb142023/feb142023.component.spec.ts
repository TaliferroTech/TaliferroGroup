import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb142023Component } from './feb142023.component';

describe('Feb142023Component', () => {
  let component: Feb142023Component;
  let fixture: ComponentFixture<Feb142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
