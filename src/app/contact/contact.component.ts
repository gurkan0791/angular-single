import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  private contactData:Contact = {
    name:"",
    email:"",
    subject:"",
    message:""
  };

  constructor() { }

  ngOnInit() {
  }
   
  sendMessage(){
    console.log(this.contactData);
  }

}
