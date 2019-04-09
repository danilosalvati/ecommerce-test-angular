import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(): Observable<Product> {
    return of({id: 11, title: 'Prodotto Mock', price: 11, imgUrl: 'www.google.it', inStock: 15});
  }
}
