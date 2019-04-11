import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesList:Categories;

  constructor(private categoryService: CategoryService) {
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(res => this.categoriesList = res);
  }

  ngOnInit() {
    this.getCategories();
  }

}
