import { Component, OnInit } from '@angular/core';
import { PlaylistTrackAPI } from '../../api';
import { PlaylistAPI } from '../../api';
import { TrackAPI } from '../../api';



@Component({
  selector: 'app-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.scss']
})
export class PlaylistTracksComponent implements OnInit {
  playlistsTracks:any = [];

  constructor(private playlistTrackAPI: PlaylistTrackAPI) { }

  ngOnInit(): void {
    this.loadPlaylistTracks();
  }

  loadPlaylistTracks() {
    this.playlistTrackAPI.query().subscribe((data) => {
      this.playlistsTracks = data;
    }, (error) => {
      console.log('error', error);
    })
  }

  onCreatePlaylistTrack(playlistTrack:any) {
    this.playlistsTracks.push(playlistTrack);
  }

  deletePlaylistTrack(id: number) {
    if (confirm("Are you sure?"))
      this.playlistTrackAPI.delete(id).subscribe(() => {
      this.playlistsTracks = this.playlistsTracks.filter((data:any) => data.id !== id);
      }, (error) => {
      console.log('error', error)
    })
  }

  updatePlaylistTrack(playlistTrack:any) {
    this.playlistTrackAPI.update(playlistTrack.id, {playlistTrack}).subscribe(() => {
      playlistTrack.edit = false;
    })
  }
}
