import { Component } from '@angular/core';
import { BookingdetailsComponent } from '../bookingdetails/bookingdetails.component';

@Component({
  selector: 'app-bookedtable',
  templateUrl: './bookedtable.component.html',
  styleUrls: ['./bookedtable.component.css']
})
export class BookedtableComponent {

passanger='';
date='';
origin='';
dest='';
  
customerDetails:any=[];

}
