import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='looperMachine'
  playing:Subject<boolean>=new Subject<boolean>()

  onPlaying(status: boolean) {
    this.playing.next(status)
  }

}
