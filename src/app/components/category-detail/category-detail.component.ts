import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../../services/product.service';
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
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getCategoriesProducts(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoriesProducts(id)
      .subscribe(products => this.productsList = products)
  }

  delProduct(id: number){
    this.productService.delProduct(id)
      .subscribe(res => {
        if(res){
          this.productsList = this.productsList.filter(product => product.id !== id);
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCategoriesProducts();
  }

}
