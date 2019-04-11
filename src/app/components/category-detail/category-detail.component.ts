import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  productsList: Products;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getCategoriesProducts(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoriesProducts(id)
      .subscribe(products => this.productsList = products)
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCategoriesProducts();
  }

}
