import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov182022Component } from './nov182022.component';

describe('Nov182022Component', () => {
  let component: Nov182022Component;
  let fixture: ComponentFixture<Nov182022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov182022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov182022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
