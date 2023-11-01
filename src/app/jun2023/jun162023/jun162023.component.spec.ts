import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun162023Component } from './jun162023.component';

describe('Jun162023Component', () => {
  let component: Jun162023Component;
  let fixture: ComponentFixture<Jun162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
