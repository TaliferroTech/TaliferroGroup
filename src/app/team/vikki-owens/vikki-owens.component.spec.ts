import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikkiOwensComponent } from './vikki-owens.component';

describe('VikkiOwensComponent', () => {
  let component: VikkiOwensComponent;
  let fixture: ComponentFixture<VikkiOwensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VikkiOwensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VikkiOwensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
