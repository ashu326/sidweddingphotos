import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;

submitted = false;
user = {
  username: '',
  email: '',
  phone: '',
  discovery: ''
}
  defaultQuestion = "facebook";
  answer="";

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.phone = this.signupForm.value.phone;
    this.user.discovery = this.signupForm.value.discovery;

    console.log(this.signupForm);

    this.signupForm.reset();
  }

}
