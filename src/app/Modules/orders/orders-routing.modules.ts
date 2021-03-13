import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
// import { CartComponent } from './cart/cart.component';
import { ArchivedOrderComponent } from './Components/archived-order/archived-order.component';
import { CanceledListComponent } from './Components/canceled-list/canceled-list.component';
import { CanceledOrderComponent } from './Components/canceled-order/canceled-order.component';
import { DeliveredPackageComponent } from './Components/delivered-package/delivered-package.component';
import { DigitalOrdersComponent } from './Components/digital-orders/digital-orders.component';
import { OrdersListComponent } from './Components/orders-list/orders-list.component';
import { PackageTrackComponent } from './Components/package-track/package-track.component';
import { ShippingFormComponent } from '../shipping/shippingComponents/shipping-form/shipping-form.component';

const ordersRoutes: Routes = [
    { path: 'list', component: OrdersListComponent },
    { path: "cancelledorders/:oID", component: CanceledOrderComponent },
    { path: "cancelledList", component: CanceledListComponent },
    { path: "DeliveringPackage/:oID", component: PackageTrackComponent },
    { path: "Archive", component: ArchivedOrderComponent },
    { path: "DigitalOrders", component: DigitalOrdersComponent },
    { path: "DeliveredPackage/:oID", component: DeliveredPackageComponent },
    { path: 'shippingDetails', component:ShippingFormComponent,canActivate:[UserGuard]},

    { path: "", redirectTo:"list", pathMatch: "full" }
    
]

@NgModule({
    imports: [RouterModule.forChild(ordersRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class OrdersRoutingModule { }
