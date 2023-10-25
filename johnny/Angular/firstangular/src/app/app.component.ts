import { Component } from '@angular/core';
//@is a decorator
@Component({
  selector: 'app-root',
  template: ` <div style="text-align: center;">
  <b>Welcome to gavs technology</b><br>
  <b>Hello Mr. </b>{{firstName}}{{lastName}}<br>
  <b>Location </b>{{location}}<br>
  <b>project Start Date</b>{{dateOfJoining}}
</div>
<router-outlet></router-outlet>`,
  styles: [`b{color:red;font-size:25}`]
})
export class AppComponent {
  //variable of the class component
  title = 'firstangular application';
  firstName='Johnny';
  lastName='DcruZe';
  location='Bangalore';
  dateOfJoining=new Date();
}
