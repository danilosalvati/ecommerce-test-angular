import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productItem: Product;
  productError: boolean;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).then(
      (product) => {
        if(product){
          this.productItem = product;
        } else {
          this.productError = true;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getProduct();
  }

}
