import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  product = {};
  categoryID: number;
  categoriesList: Categories;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(res => this.categoriesList = res);
  }

  addProduct(){
    this.productService.addProduct(this.categoryID, this.product)
    .subscribe( () => console.log('Ho inserito un prodotto'));
  }

  ngOnInit() {
    this.getCategories();
  }

}
