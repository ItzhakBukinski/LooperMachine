import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as RecordRTC from 'recordrtc';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent implements OnInit {

  @Output() recordingStatus = new EventEmitter<boolean>()
  record: any
  recording: boolean = false
  finished: boolean = false
  url: string = ""
  error: string = ""

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() { }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  initiateRecording() {
    this.recording = true;
    this.recordingStatus.emit(true)
    let mediaConstraints = {
      video: false,
      audio: true
    }

    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: any) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
      sampleRate: 45000,
    }
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  stopRecording() {
    this.finished = true
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    this.recordingStatus.emit(false)
  }

  processRecording(blob: any) {
    this.url = URL.createObjectURL(blob);
  }

  errorCallback(_error: any) {
    this.error = 'Can not play audio in your browser';

  }
}
