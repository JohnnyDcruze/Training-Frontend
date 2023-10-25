import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string="Unknown";
  lastName: string="Unknown";
  age: number=22;
  gender: string="female";
  favcolor:string="blue";
  enable:boolean=false;
  favTheme:string="theme3";
  title:string="databinding";
  isDisplayed: boolean=true;
  YesNo:boolean=true;
  salary:number=25000;
  names :string[]=["Akash","Bala","Dhaya","Gokul","Johnny"];
  location: string="chennai"
  background:boolean=true

  save()
  {
    window.alert("welcome");
  }
  verifyFirstName(obj: any){
    if(obj.target.value=="")
    {
      window.alert("firstName should not be empty")
    }
    
  }
}
