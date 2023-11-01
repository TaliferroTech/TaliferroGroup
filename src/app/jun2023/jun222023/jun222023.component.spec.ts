import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun222023Component } from './jun222023.component';

describe('Jun222023Component', () => {
  let component: Jun222023Component;
  let fixture: ComponentFixture<Jun222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
