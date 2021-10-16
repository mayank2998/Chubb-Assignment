import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { urlData } from '../model';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {

  urlDetail = {} as urlData;
  count : number = 0;
  characters :string = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
  generatedUrl : string = "https:/newurl/";
  userForm:FormGroup;
  constructor(private userService:UrlServiceService,private router:Router,@Inject(DOCUMENT) private document: Document) { 
    this.userForm = new FormGroup({
      'url': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submitdata(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.urlDetail.counter=this.count;
      this.urlDetail.url=this.userForm.value.url;
      for (let i = 0; i < 4; i++) {

        this.generatedUrl+= this.characters.charAt(Math.floor(Math.random() * this.characters.length));
  
      }
      console.log(this.generatedUrl);
      this.urlDetail.shortUrl = this.generatedUrl;
      this.userService.saveUrl(this.urlDetail).subscribe(() => {
       // this.router.navigate(['/user-list'])
       console.log(this.userForm.value.url);
        // this.document.location.href = `${this.userForm.value.url}`
        this.router.navigate(['/main/list-url'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }

  }

}
