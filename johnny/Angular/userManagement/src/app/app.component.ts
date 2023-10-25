import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userManagement';
  userName:string="unknown";
  password:string="unknown"

  // constructor (private hclient:HttpClient)
  // {
  //   console.log("HTTPClient is  created...")
  // }

  constructor(public user:User)
  {

  }
  addAUser()
  {
    axios.post("http://localhost:9000/addUser",this.user,{headers:{'Content-Type':'application/json'}})
    window.alert("trying to add a user")
  }
  // tryAuthenticate()
  // {
  //   this.hclient.get("http://localhost:5000/")
  // }
}
