import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov252022Component } from './nov252022.component';

describe('Nov252022Component', () => {
  let component: Nov252022Component;
  let fixture: ComponentFixture<Nov252022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov252022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov252022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
