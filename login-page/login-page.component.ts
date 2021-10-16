import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router:Router) { 
    this.userForm = new FormGroup({
      'emailId': new FormControl('', [Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  submitdata() {
    this.router.navigate(["/main"]);
  }
}
