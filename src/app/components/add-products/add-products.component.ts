import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  categoriesList:Categories;
  product = {};
  categoryID: number;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  addProduct(){
    this.productService.addProduct(this.categoryID, this.product)
      .subscribe( () => console.log('Ho inserito un prodotto'));
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(res => this.categoriesList = res);
  }

  ngOnInit() {
    this.getCategories();
  }

}
