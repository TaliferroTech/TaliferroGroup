import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr222023Component } from './apr222023.component';

describe('Apr222023Component', () => {
  let component: Apr222023Component;
  let fixture: ComponentFixture<Apr222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
