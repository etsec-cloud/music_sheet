import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { Component, OnInit } from '@angular/core';
import { AuddioService } from './../services/auddio.service';

@Component({
  selector: 'app-auddio',
  templateUrl: './auddio.component.html',
  styleUrls: ['./auddio.component.scss'],
})
export class AuddioComponent implements OnInit {

  isListening = false;
  message = '';

  constructor(private service: AuddioService, private mediaCapture: MediaCapture) { }

  ngOnInit() { }

  startListening() {
    this.isListening = true;

    this.mediaCapture.captureAudio()
  .then(
    (data: MediaFile[]) => {
      console.log(data);
      this.isListening = false;
      this.message = JSON.stringify(data);
    },
    (err: CaptureError) => {
      console.error(err);
      this.isListening = false;
      this.message = err.code;
    }
  );
  }

}
