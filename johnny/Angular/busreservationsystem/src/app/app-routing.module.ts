import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { BookedtableComponent } from './bookedtable/bookedtable.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'CustomerDetails',component:CustomerdetailsComponent},
{path:'BookingDetail',component:BookingdetailsComponent},
{path:'Catalog',component:CatalogComponent},
{path:'bookedTable',component:BookedtableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents=[HomeComponent,CustomerdetailsComponent,BookingdetailsComponent,CatalogComponent,BookedtableComponent];
