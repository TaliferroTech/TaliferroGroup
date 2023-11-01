import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov142022Component } from './nov142022.component';

describe('Nov142022Component', () => {
  let component: Nov142022Component;
  let fixture: ComponentFixture<Nov142022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov142022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov142022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
