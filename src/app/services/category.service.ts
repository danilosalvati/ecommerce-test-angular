import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {
  }

  getCategories(): Observable<Categories> {
    return of([]);
  }

  getCategory(): Observable<Category> {
    return of({id: 11, title: 'Categoria Mock'});
  }

}
