import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct122023Component } from './oct122023.component';

describe('Oct122023Component', () => {
  let component: Oct122023Component;
  let fixture: ComponentFixture<Oct122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
