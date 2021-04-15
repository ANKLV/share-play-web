import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {
  @Output() onAdd = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Input() tracks:any = [];
  @Input() showAddButton = false;
  @Input() editButton = true;
  wavesurfer:any;

  ngOnInit(): void {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform'
    });
    this.wavesurfer.on('ready', () => {
      this.wavesurfer.play();
    });
  }

  play(track:any) {
    track.play = true;
    this.wavesurfer.load(track.url);
    this.tracks.forEach((item:any) => {
      if (item.id != track.id) {
        item.play = false;
      }
    })
  }

  pause(track:any) {
    this.wavesurfer.pause(track);
    track.play = false;
  }
}
