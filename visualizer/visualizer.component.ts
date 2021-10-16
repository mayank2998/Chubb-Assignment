import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { graphData, urlData } from '../model';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  val ?: any = 0;
  view : any= [500,370];
  view2 : any= [250,300];
  schemeType: string = 'linear';
  gradient : boolean = false;
  xAxis : boolean = true;
  yAxis : boolean = true;
  legendTitle : string = 'Attendance';
  legendPosition : string = 'below';
  legend : boolean = true;
  showXAxisLabel : boolean =true;
  showYAxisLabel : boolean =true;
  xAxisLabel : string ='URL';
  yAxisLabel : string ='No. Of Clicks';

  //pie chart details
  gradient2: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition2: any = 'below';
 
  colorScheme = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#fcba03', '#fc2803', '#5efc03', '#09c4d9']
  };

  graphValues : Array<urlData> =[]
  graph : Array<graphData> = []
  constructor(private userService:UrlServiceService) {

   }

  ngOnInit(): void {
    this.userService.getAllUrl().subscribe((data) => {
      this.graphValues=data;
      for(let i=0;i<this.graphValues.length;i++){
        let obj = {} as graphData
        obj.name=this.graphValues[i].shortUrl.slice(14);
        obj.value=this.graphValues[i].counter
       this.graph.push(obj);
      }
      console.log(this.graph);
      this.graph = [...this.graph];
    })
  }

}
