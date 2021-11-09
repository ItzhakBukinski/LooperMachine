import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() playingStatus: EventEmitter<boolean> = new EventEmitter<boolean>()
  playing: boolean = false

  ngOnInit() { }

  onStartPlaying() {
    this.playing = true
    this.playingStatus.emit(true)
  }

  onStopPlaying() {
    this.playing = false
    this.playingStatus.emit(false)
  }

  onRecording(status: boolean) {
    if (status) {
      this.onStopPlaying()
      this.onStartPlaying()

    } else {
      this.onStopPlaying()
    }
  }
}
