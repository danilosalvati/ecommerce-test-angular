import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.http.get('http://192.168.3.177:5000/categories');
  }

  getCategory(): Observable<Category> {
    return of({id: 11, title: 'Categoria Mock'});
  }

}
