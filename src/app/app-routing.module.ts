import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { TrackComponent } from './components/track/track.component';

const routes: Routes = [
  { path: '' , redirectTo: 'playlists', pathMatch: 'full' },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'track', component: TrackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
