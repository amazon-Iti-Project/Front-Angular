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


const routes:Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: "home", component: HomeBodyComponent },
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
    HomeBodyComponent
  ],
  imports: [
CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class CustomerModule { }
