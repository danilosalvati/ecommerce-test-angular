import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SERVICE_URL} from '../../conf/conf';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {}

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(`${SERVICE_URL}/categories`);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${SERVICE_URL}/category/${id}`);
  }

  getCategoriesProducts(id: number): Observable<Products>{
    return this.http.get<Products>(`${SERVICE_URL}/categories/${id}/products`);
  }

}
