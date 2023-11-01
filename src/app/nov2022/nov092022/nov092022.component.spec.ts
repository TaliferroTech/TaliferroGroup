import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov092022Component } from './nov092022.component';

describe('Nov092022Component', () => {
  let component: Nov092022Component;
  let fixture: ComponentFixture<Nov092022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov092022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov092022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
