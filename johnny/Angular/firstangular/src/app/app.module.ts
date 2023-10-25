import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent//declaring the component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule//importing all the required modules
  ],
  providers: [],
  bootstrap: [
    CustomerdetailsComponent,AppComponent]
    //app component will loaded first, then followed by customerdetail
})
export class AppModule { }
