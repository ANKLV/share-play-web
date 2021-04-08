import { Component, OnInit } from '@angular/core';
import { TrackAPI } from '../../api';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-track',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks:any = [];
  wavesurfer:any;

  constructor(private trackAPI: TrackAPI) { }

    ngOnInit(): void {
      this.loadTracks();
      this.wavesurfer = WaveSurfer.create({
        container: '#waveform'
      });
      this.wavesurfer.on('ready', () => {
        this.wavesurfer.play();
      });
    }

    loadTracks() {
      this.trackAPI.query().subscribe((data) => {
        this.tracks = data;
      }, (error) => {
        console.log('error', error);
      })
    }

    onCreateTrack(track:any) {
      this.tracks.push(track);
    }

    deleteTrack(id: number) {
      if (confirm("Are you sure?"))
        this.trackAPI.delete(id).subscribe(() => {
        this.tracks = this.tracks.filter((data:any) => data.id !== id);
        }, (error) => {
        console.log('error', error)
      })
    }

    updateTrack(track:any) {
      this.trackAPI.update(track.id, {track}).subscribe(() => {
        track.edit = false;
      })
    }

    play(track:any) {
      this.wavesurfer.load(track.url);
      track.play = true;
    }

    pause(track:any) {
      this.wavesurfer.pause(track);
      track.play = false;
    }
  }
