import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesDetailComponent } from './product-types-detail.component';

describe('ProductTypesDetailComponent', () => {
  let component: ProductTypesDetailComponent;
  let fixture: ComponentFixture<ProductTypesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
