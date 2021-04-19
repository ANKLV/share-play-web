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
  @Input() showDeleteButton = true;
  wavesurfer:any;
  currentTrack:any;

  get currentTrackIndex() {
    return this.tracks.map((track:any) => track.id).indexOf(this.currentTrack.id);
  }

  ngOnInit(): void {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform'
    });
    this.wavesurfer.on('ready', () => {
      this.wavesurfer.play();
    });
    this.wavesurfer.on('finish', () => {
      if (this.currentTrackIndex !==-1 && this.tracks.length - 1 > this.currentTrackIndex){
        const nextTrack = this.tracks[this.currentTrackIndex + 1];
        this.play(nextTrack);
      }
    });
  }

  play(track:any) {
    track.play = true;
    this.currentTrack = track;
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
