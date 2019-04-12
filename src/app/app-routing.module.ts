import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryDetailComponent} from './components/category-detail/category-detail.component';
import {AddProductsComponent} from './components/add-products/add-products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'categories', redirectTo: '/'},
  {path: 'add-product', component: AddProductsComponent},
  {path: 'category/:id', component: CategoryDetailComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
