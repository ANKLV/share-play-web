import { NgModule } from '@angular/core';

import { PlaylistAPI } from './playlist';

import { TrackAPI } from './track';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [PlaylistAPI, TrackAPI]
})
export class ApiModule { }
