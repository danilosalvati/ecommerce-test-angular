import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoryService } from './services/category.service';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductDetailComponent,
    NavBarComponent,
    CategoryDetailComponent,
    AddProductsComponent,
    FormProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
