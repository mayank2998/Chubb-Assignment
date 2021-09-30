import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {
  @Input() myData : any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
