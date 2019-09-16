import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.scss']
})
export class PropbindingComponent implements OnInit {
  myFirstName = 'Mayur';
  myLastName = 'Bhowad';
  flag = false;

  constructor() { }

  ngOnInit() {
  }

}
