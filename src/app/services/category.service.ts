import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'https://192.168.3.161:8080';
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Categories> {
    return this.http
            .get<Categories>(`${this.baseUrl}/categories`);
  }

  getCategory(): Observable<Category> {
    return of({id: 11, title: 'Categoria Mock'});
  }

}
