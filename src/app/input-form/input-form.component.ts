import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() taskCreated= new EventEmitter<{taskName: string, taskContent: string}>();
  @Output('bpCreated') goalCreated= new EventEmitter<{taskName: string, taskContent: string}>();
  newtaskName = '';
  newtaskContent = '';
  newId= '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddtask(){
    this.taskCreated.emit({
      taskName: this.newtaskName,
      taskContent: this.newtaskContent
    })
  }

  onAddgoal(){
    this.goalCreated.emit({
      taskName: this.newtaskName,
      taskContent: this.newtaskContent
      
    })
  }


  


}
