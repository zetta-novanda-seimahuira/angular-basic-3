import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "ssf";
  taskElements = [{type: 'task', name:'It Is Title!', content: 'Description '}];

  ontaskAdded(taskData: {taskName: string, taskContent: string}){
    this.taskElements.push({
      type : 'task',
      name : taskData.taskName,
      content: taskData.taskContent
    });
  }
  ongoalAdded(goalData: {taskName: string, taskContent: string}){
    this.taskElements.push({
      type : 'goal',
      name : goalData.taskName,
      content: goalData.taskContent
    });

}
}
