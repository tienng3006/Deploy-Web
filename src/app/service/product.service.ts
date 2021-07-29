import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  product: Product | undefined;
  private productsUrl: string = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((_) => {
        console.log('Fetch product list');
      }),
      catchError(this.handleError<Product[]>('Fetch producs', []))
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(
      tap((_) => {
        console.log(`Fetch Product ${id}`);
      }),
      catchError(this.handleError<Product>(`Fetch Product ${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
