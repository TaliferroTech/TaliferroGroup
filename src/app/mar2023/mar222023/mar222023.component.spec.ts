import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar222023Component } from './mar222023.component';

describe('Mar222023Component', () => {
  let component: Mar222023Component;
  let fixture: ComponentFixture<Mar222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
