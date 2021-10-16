import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urlData } from '../model';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.css']
})
export class ListUrlComponent implements OnInit {

  urlList:Array<urlData> = []
  updtatedUrlData = {} as urlData
  constructor(private userService:UrlServiceService,private router:Router) { 
  
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.userService.getAllUrl().subscribe((data) => {
      this.urlList = data
     })
  }
  // getDataByShortUrl(shortUrl : string){
  //   this.userService.getUrlByID(shortUrl).subscribe((data) => {
  //     this.urlList = data
  //    })
  // }

  updateUrlCounter(id : number){
    console.log(id);
    this.userService.getUrlByID(id).subscribe((data) => {
      this.updtatedUrlData.id = data[0].id;
      this.updtatedUrlData.shortUrl = data[0].shortUrl;
      this.updtatedUrlData.url = data[0].url;
      this.updtatedUrlData.counter = data[0].counter+1;
      this.updateUrlDetails(data[0].id,this.updtatedUrlData);
      this.ngOnInit();
      
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/main/list-url']);
    });
      
     })
    
  }
  updateUrlDetails(id : number, payload : urlData){
    this.userService.updateUrlById(id,payload).subscribe((data) => {
      console.log("updated");
    })

  }

}
