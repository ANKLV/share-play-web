import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlaylistAPI } from '../../api';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  playlistForm = new FormGroup({
    title: new FormControl(null, Validators.required)
  })

  constructor(private playlistAPI: PlaylistAPI) { }

  ngOnInit(): void {
    this.createPlaylist();
  }

  createPlaylist() {
    console.log(this.playlistForm.value)
    this.playlistAPI.create({playlist: this.playlistForm.value}).subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.log('error', error);
    })
    this.playlistForm.reset();
  }

}
