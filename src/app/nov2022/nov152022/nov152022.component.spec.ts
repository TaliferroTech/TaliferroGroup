import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov152022Component } from './nov152022.component';

describe('Nov152022Component', () => {
  let component: Nov152022Component;
  let fixture: ComponentFixture<Nov152022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov152022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov152022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
