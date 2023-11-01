import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectUrlComponent } from './incorrect-url.component';

describe('IncorrectUrlComponent', () => {
  let component: IncorrectUrlComponent;
  let fixture: ComponentFixture<IncorrectUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrectUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorrectUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
