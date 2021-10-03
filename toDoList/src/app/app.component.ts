import { Component } from '@angular/core';
import { Card } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  textValue = "";
  
  

  toDoItems : any = [
      {
        title : "Title 1",
        status : false,
        bntStyle: "task-uncompleted"
      },
      {
        title :"Title 2",
        status : false,
        bntStyle: "task-uncompleted"
      },
      {
        title :"Title 3",
        status : false,
        bntStyle: "task-uncompleted"
      },
      {
        title :"Title 4",
        status : false,
        bntStyle: "task-uncompleted"
      },
      {
        title :"Title 4",
        status : false,
        bntStyle: "task-uncompleted"
      }
  ]

  addDatatoCart(item:any){
    console.log(item);
    var myObj = {
      title : item,
      status : false,
      bntStyle : "task-uncompleted"
    }
    this.toDoItems.push(myObj);
    console.log(this.toDoItems.length);
  }

  removeFromList(item : any){
    //this.toDoItems.splice(index,1)
    console.log("button clicked");
    console.log(item.status);
    item.status = !item.status;
    console.log(item.status);
    if(item.status == true){
      item.bntStyle = 'task-completed';
    }
    else{
      item.bntStyle = 'task-uncompleted';
    }

  }

  removeCompletedtask(){
    var toDelete = [];
    var k=0;
    for(var i=0;i<this.toDoItems.length;i++){
      if(this.toDoItems[i].status == true){
        toDelete.push(this.toDoItems[i]);
      }
    }
    for(var i=0;i<toDelete.length;i++){
    var index = this.toDoItems.indexOf(toDelete[i]);
    if (index > -1) {
      this.toDoItems.splice(index, 1);
    }
  }
  }
}
