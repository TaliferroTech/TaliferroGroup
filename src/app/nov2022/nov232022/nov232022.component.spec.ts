import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov232022Component } from './nov232022.component';

describe('Nov232022Component', () => {
  let component: Nov232022Component;
  let fixture: ComponentFixture<Nov232022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov232022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov232022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
