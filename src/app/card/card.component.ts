import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('tskElement') element: {type: string, name: string, content:string, cardId:number };
  constructor() { }

  ngOnInit(): void {
  }

}
