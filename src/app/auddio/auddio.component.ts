import { RecordingData, GenericResponse } from 'capacitor-voice-recorder';
import { Component, OnInit } from '@angular/core';
import { AuddioService } from './../services/auddio.service';
import { Plugins } from '@capacitor/core';

const { VoiceRecorder } = Plugins;

@Component({
  selector: 'app-auddio',
  templateUrl: './auddio.component.html',
  styleUrls: ['./auddio.component.scss'],
})
export class AuddioComponent implements OnInit {

  isListening = false;

  constructor(private service: AuddioService) { }

  ngOnInit() { }

  startListening() {
    this.isListening = true;

    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => {
      if (!result.value) {
        VoiceRecorder.requestAudioRecordingPermission().then((audioPerm: GenericResponse) => {
          if (audioPerm.value) {
            // On peut enregistrer
            VoiceRecorder.startRecording()
              .then((record: GenericResponse) => {
                setTimeout(() => {
                  VoiceRecorder.stopRecording();
                  console.log(record.value);
                }, 5000);
              })
              .catch(error => console.log(error));
          } else {
            console.log('Tu veux po');
            this.isListening = false;
          }
        });
      } else {
        // On peut enregistrer
        VoiceRecorder.startRecording()
          .then((record: GenericResponse) => {
            setTimeout(() => {
              VoiceRecorder.stopRecording();
              console.log(record.value);
            }, 5000);
          })
          .catch(error => console.log(error));
      }
    });
    /* setTimeout(() => {
      this.isListening = false;
    }, 3000); */

  }

}
