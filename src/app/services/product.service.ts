import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SERVICE_URL} from '../../conf/conf';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {}

  getProduct(id: number): Promise<Product> {
    return fetch(`${SERVICE_URL}/product/${id}`)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
    })
  }

  // Post
  addProduct(id: number, product: object): Observable<Product>{
    return this.http.post<Product>(`${SERVICE_URL}/categories/${id}/product`, product);
  }

  // Put
  updateProduct(product: object): Observable<Product>{
    return this.http.put<Product>(`${SERVICE_URL}/product`, product);
  }

  // Delete
  delProduct(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${SERVICE_URL}/product/${id}`);
  }
}
