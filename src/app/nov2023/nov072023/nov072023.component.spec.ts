import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov072023Component } from './nov072023.component';

describe('Nov072023Component', () => {
  let component: Nov072023Component;
  let fixture: ComponentFixture<Nov072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
