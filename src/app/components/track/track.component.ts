import { Component, OnInit } from '@angular/core';
import { TrackAPI } from '../../api';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  track:any = [];

  constructor(private trackAPI: TrackAPI) { }

    ngOnInit(): void {
      this.loadTracks();
    }

    loadTracks() {
      this.trackAPI.query().subscribe((data) => {
        this.track = data;
      }, (error) => {
        console.log('error', error);
      })
    }

    onCreateTrack(track:any) {
      this.track.push(track);
    }

    deleteTrack(id: number) {
      if (confirm("Are you sure?"))
        this.trackAPI.delete(id).subscribe(() => {
        this.track = this.track.filter((data:any) => data.id !== id);
        }, (error) => {
        console.log('error', error)
      })
    }
  }
