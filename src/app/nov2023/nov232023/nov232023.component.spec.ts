import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov232023Component } from './nov232023.component';

describe('Nov232023Component', () => {
  let component: Nov232023Component;
  let fixture: ComponentFixture<Nov232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
