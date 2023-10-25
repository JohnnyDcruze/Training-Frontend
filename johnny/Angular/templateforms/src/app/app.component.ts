import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  project_list:any=[];
  project_Data : any;
  title = 'templateforms';

  //process data individually
  /*processData(projectData : any)
  {
    var pdata=JSON.stringify(projectData.value)
    this.project_Data=JSON.parse(pdata);
    console.log(this.project_Data);
    this.project_list.push(this.project_Data);
    
  }*/

  //process data completely
  processData(form:NgForm)
  {
    this.project_list.push(form.value)
  }
}
