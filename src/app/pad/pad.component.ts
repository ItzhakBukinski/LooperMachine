import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClickedPad } from './clickedPad.model';
import { Pad } from './pad.model';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  @Input() pad: Pad = new Pad("","",false)
  clicked = false;
  @Output() onClicked = new EventEmitter<ClickedPad>()
  

  constructor() {
  }

  ngOnInit(): void {
  }
  onClick() {
    this.clicked = !this.clicked
    if (this.clicked) {
      this.onClicked.emit(new ClickedPad(this.pad.name,true))
    
    } else {
      this.onClicked.emit(new ClickedPad(this.pad.name,false))
    
    }
   
  }

  getStatusColor() {
    return this.clicked === true ? "green" : "red"
  }

}
