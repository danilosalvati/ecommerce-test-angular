import { Component, OnInit, Input } from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  categoriesList:Categories;
  @Input() product;

  constructor(
    private categoryService: CategoryService,
  ) {}

  ngOnInit() {
  }

}
