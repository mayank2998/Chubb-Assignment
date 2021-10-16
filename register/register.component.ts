import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router:Router) { 
    this.userForm = new FormGroup({
      'emailId': new FormControl('', [Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'confirmpassword': new FormControl('', [Validators.required]),
      'dob' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submitdata(){
    this.router.navigate([""]);
  }

}
