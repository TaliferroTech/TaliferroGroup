import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov022023Component } from './nov022023.component';

describe('Nov022023Component', () => {
  let component: Nov022023Component;
  let fixture: ComponentFixture<Nov022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
