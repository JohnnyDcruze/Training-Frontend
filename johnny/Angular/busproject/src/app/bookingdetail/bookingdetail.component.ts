import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})


export class BookingDetailComponent implements OnInit {
  passengername: string = '';
  origin: string = '';
  destination: string = '';
  startDate: string = '';
  disable: boolean = true;
  today: string = new Date().toISOString().split('T')[0];

  constructor() {}

  ngOnInit(): void {}

  validate(event: Event): void {
    event.preventDefault();
    let submitOK = true;

    if (this.passengername.length > 10) {
      alert('The name must be less than 10 characters');
      submitOK = false;
    }

    if (this.origin === this.destination) {
      this.disable = true;
      alert('Destination and origin should not be the same');
    } else {
      this.disable = !submitOK;
    }
  }

  handleNameChange(event: any): void {
    this.passengername = event;
  }

  handleDateChange(event: any): void {
    this.startDate = event;
  }

  handleOriginChange(event: any): void {
    this.origin = event;
    this.check();
  }

  handleDestinationChange(event: any): void {
    this.destination = event;
    this.check();
  }

  check(): void {
    if (this.passengername.length <= 10 && this.origin !== this.destination) {
      this.disable = false;
    } else {
      this.disable = true;
    }
  }

  successful(): void {
    alert('Your booking has been successfully created');
  }

}
