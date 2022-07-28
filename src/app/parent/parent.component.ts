import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() name:any;
  constructor() { }
@ViewChild("message") para:ElementRef|any;
  data:any;
  ngOnInit(): void {
  }

  // getData(event:any){
  //   this.data=event;
  // }
  clickMe(){
   this.para.nativeElement.innerHTML="Welcome Home";
  }
}
