import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookingDetailComponent } from './bookingdetail/bookingdetail.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'BookingDetail',component:BookingDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents=[HomeComponent,BookingDetailComponent];
