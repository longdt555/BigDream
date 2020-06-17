import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesAddComponent } from './product-types-add.component';

describe('ProductTypesAddComponent', () => {
  let component: ProductTypesAddComponent;
  let fixture: ComponentFixture<ProductTypesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
