import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent implements OnInit {

 hide: boolean = false;

  show(): void {
    console.log('Hello from event binding');
    this.hide = !this.hide;
  }

  constructor() { }

  ngOnInit() {
  }

}
