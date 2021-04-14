import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as WaveSurfer from 'wavesurfer.js';

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
  playlists:any = [];
  tracks:any = [];
  playlistId:any;

  constructor(private playlistTrackAPI: PlaylistTrackAPI, private trackAPI: TrackAPI, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.loadPlaylistTracks(this.playlistId);
    this.loadTracks();
  }

  loadPlaylistTracks(playlistId:any) {
    this.playlistTrackAPI.query({playlist_id: playlistId}).subscribe((data) => {
      this.playlistsTracks = data;
      console.log('error', data);
    }, (error) => {
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

  loadTracks(query?:any) {
    const params = query ? {query: query} : {};

    this.trackAPI.query(params).subscribe((data) => {
      this.tracks = data;
    }, (error) => {
      console.log('error', error);
    })
  }

  addTrack(track:any) {
    this.playlistTrackAPI.create({playlist_track: {track_id: track.id, playlist_id: this.playlistId }}).subscribe((data) => {
    this.playlistsTracks.push(data);
    })
  }
}
