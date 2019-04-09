import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  getCategories(): void {
    console.log(this.categoryService);
    this.categoryService.getCategories()
      .subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.getCategories();
  }

}
