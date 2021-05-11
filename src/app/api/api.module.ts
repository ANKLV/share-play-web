import { NgModule } from '@angular/core';

import { PlaylistAPI } from './playlist';

import { TrackAPI } from './track';

import { PlaylistTrackAPI } from './playlistTrack';

import { UserAPI } from './user';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [PlaylistAPI, TrackAPI, PlaylistTrackAPI, UserAPI]
})
export class ApiModule { }
