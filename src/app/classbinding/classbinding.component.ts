import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.scss']
})
export class ClassbindingComponent implements OnInit {

  myClass = "txtColor";

  clicked(){
    this.myClass = "clickColor";
  }

  constructor() { }

  ngOnInit() {
  }

}
