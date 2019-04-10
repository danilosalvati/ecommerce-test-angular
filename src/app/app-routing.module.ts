import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './components/categories/categories.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'categories', redirectTo: '/'},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
