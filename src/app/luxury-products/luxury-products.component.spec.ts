import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryProductsComponent } from './luxury-products.component';

describe('LuxuryProductsComponent', () => {
  let component: LuxuryProductsComponent;
  let fixture: ComponentFixture<LuxuryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxuryProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
