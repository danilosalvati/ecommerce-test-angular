import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {SERVICE_URL} from '../../conf/conf';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.http.get(`${SERVICE_URL}/categories`);
  }

  getCategory(): Observable<Category> {
    return of({id: 11, title: 'Categoria Mock'});
  }

}
