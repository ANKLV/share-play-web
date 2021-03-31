import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';

const routes: Routes = [
  { path: '' , redirectTo: 'playlists', pathMatch: 'full' },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlist-form', component: PlaylistFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
