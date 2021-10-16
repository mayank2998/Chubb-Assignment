import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  urlCount : number =0;
  maxClick : number =0;
  constructor(private userService:UrlServiceService) {
      
   }

  ngOnInit(): void {
    this.userService.getAllUrl().subscribe((data) => {
      this.urlCount = data.length;
      data.forEach((i)=>{
        if(i.counter>this.maxClick){
          this.maxClick=i.counter;
        }
      })
     })
  }

}
