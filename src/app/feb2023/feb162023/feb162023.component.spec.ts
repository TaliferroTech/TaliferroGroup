import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb162023Component } from './feb162023.component';

describe('Feb162023Component', () => {
  let component: Feb162023Component;
  let fixture: ComponentFixture<Feb162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
