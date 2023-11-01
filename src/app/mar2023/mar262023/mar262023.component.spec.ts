import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar262023Component } from './mar262023.component';

describe('Mar262023Component', () => {
  let component: Mar262023Component;
  let fixture: ComponentFixture<Mar262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
