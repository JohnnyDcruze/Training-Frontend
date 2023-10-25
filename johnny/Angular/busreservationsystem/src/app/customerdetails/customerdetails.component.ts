import { Component } from '@angular/core';
import { FormControl,Validators,FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {
  customerform: FormGroup;
  customerDetails: any[] = []; // Array to store user details

  constructor(private formBuilder: FormBuilder) {
    this.customerform = this.formBuilder.group({
      name:new FormControl('unknnown',[Validators.required,Validators.minLength(5)]),  
      age:new FormControl(18,[Validators.min(18),Validators.max(69),Validators.required]),
      address: ['', Validators.required],
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      email:new FormControl('email',Validators.email),
    },
    {
      updateOn:'blur'
    }
    );
  }

  onSubmit() {
    if (this.customerform.valid) {
      this.customerDetails.push(this.customerform.value);
      this.customerform.reset();
    }
  }



}
