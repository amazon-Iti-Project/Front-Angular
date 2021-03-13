import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
import { ShippingFormComponent } from './shippingComponents/shipping-form/shipping-form.component';

const routes: Routes = [
    { path: '', component: ShippingFormComponent ,},
    { path: "", redirectTo:"", pathMatch: "full" }
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class ShippingRoutingModule { }
