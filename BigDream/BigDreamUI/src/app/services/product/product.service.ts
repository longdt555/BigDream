import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
//// API
//BEGIN
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "https://localhost:44396/api/product";
//END
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(Product => console.log('fetched Products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  
  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(apiUrl, Product, httpOptions).pipe(
      tap((prod: Product) => console.log(`added Product w/ id=${Product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  
  updateProduct(id: any, Product: Product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Product, httpOptions).pipe(
      tap(_ => console.log(`updated Product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct(id: any): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }
}
