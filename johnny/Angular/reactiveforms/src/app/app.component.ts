import { Component } from '@angular/core';[]
import { FormGroup, FormControl , Validators  } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';

  frmGroup=new FormGroup({
    firstName:new FormControl("unknown",[Validators.required , Validators.minLength(10)]),
    lastName: new FormControl("unknown", Validators.required),
    age: new FormControl(18,[Validators.min(18),Validators.max(60)]),
    email: new FormControl('email',Validators.email)

  },
  {
    updateOn:'blur'
  }
  )
  processData()
  {
    alert("hello");
  }
}
