import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb222023Component } from './feb222023.component';

describe('Feb222023Component', () => {
  let component: Feb222023Component;
  let fixture: ComponentFixture<Feb222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
