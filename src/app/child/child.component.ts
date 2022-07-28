import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }

  data:any;
  @Output() send=new EventEmitter();
  ngOnInit(): void {
  }
  sendData(){
    this.send.emit(this.data);
  }

}
