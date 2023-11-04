import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov182023Component } from './nov182023.component';

describe('Nov182023Component', () => {
  let component: Nov182023Component;
  let fixture: ComponentFixture<Nov182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
