import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct032023Component } from './oct032023.component';

describe('Oct032023Component', () => {
  let component: Oct032023Component;
  let fixture: ComponentFixture<Oct032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
