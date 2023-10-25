import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpipes';
  name="Janakiraman boopathy";
  date="09-26-2001"
  salary: number=35000;
  currency: string="INR";
}
