import { BrowserModule } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { ProductTypesAddComponent } from './components/product-types-add/product-types-add.component';
import { ProductTypesEditComponent } from './components/product-types-edit/product-types-edit.component';
import { ProductTypesDetailComponent } from './components/product-types-detail/product-types-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NgbdModalComponent, NgbdModalContent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductTypesComponent,
    ProductTypesAddComponent,
    ProductTypesEditComponent,
    ProductTypesDetailComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
