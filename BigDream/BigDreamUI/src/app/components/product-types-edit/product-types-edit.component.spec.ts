import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesEditComponent } from './product-types-edit.component';

describe('ProductTypesEditComponent', () => {
  let component: ProductTypesEditComponent;
  let fixture: ComponentFixture<ProductTypesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
