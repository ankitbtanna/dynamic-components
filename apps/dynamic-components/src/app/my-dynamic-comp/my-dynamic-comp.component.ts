import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dynamic-components-my-dynamic-comp',
  templateUrl: './my-dynamic-comp.component.html',
  styleUrls: ['./my-dynamic-comp.component.scss']
})
export class MyDynamicCompComponent implements OnInit {
  @Input() data: string = '';
  @Output() dynamicComponentButtonClicked: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  triggerEvent(): void {
    this.dynamicComponentButtonClicked.emit('Hello From Dynamic Component!')
  }
}
