import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb252023Component } from './feb252023.component';

describe('Feb252023Component', () => {
  let component: Feb252023Component;
  let fixture: ComponentFixture<Feb252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
