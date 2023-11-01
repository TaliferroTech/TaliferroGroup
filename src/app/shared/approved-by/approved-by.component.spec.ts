import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedByComponent } from './approved-by.component';

describe('ApprovedByComponent', () => {
  let component: ApprovedByComponent;
  let fixture: ComponentFixture<ApprovedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
