import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { ApiModule } from './api/api.module';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrackFormComponent } from './components/track-form/track-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistFormComponent,
    TracksComponent,
    NavbarComponent,
    TrackFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
