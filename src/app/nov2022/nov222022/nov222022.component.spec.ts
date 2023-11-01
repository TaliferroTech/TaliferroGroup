import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov222022Component } from './nov222022.component';

describe('Nov222022Component', () => {
  let component: Nov222022Component;
  let fixture: ComponentFixture<Nov222022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov222022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov222022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
