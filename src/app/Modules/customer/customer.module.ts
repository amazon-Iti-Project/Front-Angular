import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartComponent } from '../orders/cart/cart.component';
import { OrdersHomeComponent } from '../orders/Components/orders-home/orders-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingFormComponent } from '../orders/shipping-form/shipping-form.component';


const routes:Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: "home", component: HomeBodyComponent },
      { path: 'category', loadChildren: () => import('../categories/categories.module').then(module => module.CategoriesModule) },
      { path: 'departments', loadChildren: () => import('src/app/Modules/categories/categories.module').then(m => m.CategoriesModule) },
      {
        path: 'Orders',
        component: OrdersHomeComponent,
        loadChildren:  () => import('src/app/Modules/orders/orders.module').then(m => m.OrdersModule)
      },
      { path: 'cart', component:CartComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: "**", component: NotFoundComponent }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    CarouselComponent,
    HomeBodyComponent,
<<<<<<< HEAD
    SignUpComponent,
    SignInComponent,
    TranslateModule
=======
>>>>>>> 926271750c62e7c8a9bd838d2ee14b446400f68e
  ],
  imports: [
CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomerModule { }
