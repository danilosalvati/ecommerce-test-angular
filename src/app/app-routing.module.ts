import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'categories', redirectTo: '/'},
  {path: 'category/:id', component: CategoryDetailComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
