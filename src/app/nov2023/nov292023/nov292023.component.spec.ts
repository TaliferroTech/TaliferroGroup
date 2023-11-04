import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov292023Component } from './nov292023.component';

describe('Nov292023Component', () => {
  let component: Nov292023Component;
  let fixture: ComponentFixture<Nov292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
