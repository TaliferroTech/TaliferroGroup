import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct222023Component } from './oct222023.component';

describe('Oct222023Component', () => {
  let component: Oct222023Component;
  let fixture: ComponentFixture<Oct222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
