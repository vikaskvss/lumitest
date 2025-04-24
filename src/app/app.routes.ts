import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.routes').then(m => m.CART_ROUTES)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./features/checkout/checkout.routes').then(m => m.CHECKOUT_ROUTES)
      }
    ]
  }
];
