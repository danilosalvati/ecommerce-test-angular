import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVICE_URL} from '../../conf/conf';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(id: number): Observable<Product> {
    return fetch(`${SERVICE_URL}/product/${id}`)
    .then(function(response) {
      if(response) {
        return response.json();
      }
    })
  }
}
