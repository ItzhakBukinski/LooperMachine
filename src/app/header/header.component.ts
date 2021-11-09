import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() playingStatus = new EventEmitter<boolean>()
  playing = false
  constructor() { }
  ngOnInit(): void {
  }
  onStartPlaying() {
    this.playing = true
    this.playingStatus.emit(true)
  }
  onStop() {
    this.playing = false
    this.playingStatus.emit(false)
  }
}
