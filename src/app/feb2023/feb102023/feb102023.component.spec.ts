import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb102023Component } from './feb102023.component';

describe('Feb102023Component', () => {
  let component: Feb102023Component;
  let fixture: ComponentFixture<Feb102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
