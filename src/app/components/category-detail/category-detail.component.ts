import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.getCategory();
  }

}
