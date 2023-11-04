import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov282023Component } from './nov282023.component';

describe('Nov282023Component', () => {
  let component: Nov282023Component;
  let fixture: ComponentFixture<Nov282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
