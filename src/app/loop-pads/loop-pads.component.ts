import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClickedPad } from '../pad/clickedPad.model';
import { Pad } from '../pad/pad.model';

@Component({
  selector: 'app-loop-pads',
  templateUrl: './loop-pads.component.html',
  styleUrls: ['./loop-pads.component.css']
})
export class LoopPadsComponent implements OnInit {
  pads: Pad[] = [];
  @Input() playing: Observable<boolean> = new Observable<boolean>()

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 9; index++) {
      this.pads[index] = new Pad(
        "assets/audio/audio" + index + ".mp3",
        "assets/audio/audio" + index + ".mp3",
        false)  
      }

      this.playing.subscribe((status) => {
        this.onStartPlaying(status)
      })
  }

  onClicked(clickedPad: ClickedPad) {
    let padIndex = parseInt(clickedPad.name.charAt(18))

    if (clickedPad.status) {
      this.pads[padIndex].on = true

    } else {
      this.pads[padIndex].on = false
      this.pads[padIndex].audio.pause()
      this.pads[padIndex].audio.load()
    }
  }

  onStartPlaying(status: boolean) {
    for (let index = 0; index < this.pads.length; index++) {
      const element = this.pads[index];
      if (status && this.pads[index].on) {
        element.audio.play()
      } else {
        element.audio.pause()
      }
    }
  }
}
