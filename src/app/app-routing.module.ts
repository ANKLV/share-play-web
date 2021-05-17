import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { PlaylistTracksComponent } from './components/playlist-tracks/playlist-tracks.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  { path: '' , redirectTo: 'playlists', pathMatch: 'full' },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'playlists/:id/tracks', component: PlaylistTracksComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
