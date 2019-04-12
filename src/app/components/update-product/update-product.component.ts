import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  updateProduct(){
    this.productService.updateProduct(this.product)
    .subscribe(
      () => console.log('Ho aggiornato il prodotto'),
      error => alert('Error')
    );
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).then(
      (product) => {
        console.log(product)
        if(product){
          this.product = product;
        } else {
          alert('Product not existing');
        }
      });
  }

  ngOnInit() {
    this.getProduct();
  }
}
