import { NgModule } from '@angular/core';

import { PlaylistAPI } from './playlist';

import { TrackAPI } from './track';

import { PlaylistTrackAPI } from './playlistTrack';

import { UserAPI } from './user';

import { SessionAPI } from './session';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [PlaylistAPI, TrackAPI, PlaylistTrackAPI, UserAPI, SessionAPI]
})
export class ApiModule { }
