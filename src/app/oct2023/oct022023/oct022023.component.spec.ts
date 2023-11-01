import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct022023Component } from './oct022023.component';

describe('Oct022023Component', () => {
  let component: Oct022023Component;
  let fixture: ComponentFixture<Oct022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
