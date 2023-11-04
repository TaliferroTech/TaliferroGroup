import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov162023Component } from './nov162023.component';

describe('Nov162023Component', () => {
  let component: Nov162023Component;
  let fixture: ComponentFixture<Nov162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
