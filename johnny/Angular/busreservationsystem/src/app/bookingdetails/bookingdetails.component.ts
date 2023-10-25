import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent {
  form: FormGroup;
  currentDate: string;

  constructor(private fb: FormBuilder) {
    this.currentDate = new Date().toISOString().split('T')[0];
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', [Validators.required], this.validateOriginDestination],
    })
    

  }

  validateOriginDestination() {

    const originValue = this.form.get('origin')?.value;

    const destinationValue = this.form.get('destination')?.value;
    console.log(originValue + "\t\t" + destinationValue);

    if (originValue === destinationValue) {
      alert("Origin and destination should not be the same!");
      const destinationInput = document.getElementById("destination") as HTMLInputElement;
      if (destinationInput) {
        destinationInput.focus();
      }
    }
  }
  
  onSubmit() {
    alert("Submited...");
  }

}

