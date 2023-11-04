import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov042023Component } from './nov042023.component';

describe('Nov042023Component', () => {
  let component: Nov042023Component;
  let fixture: ComponentFixture<Nov042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
