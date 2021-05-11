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
import { PlaylistTracksComponent } from './components/playlist-tracks/playlist-tracks.component';
import { TrackSearchComponent } from './components/track-search/track-search.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Toastr } from "./providers"

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistFormComponent,
    TracksComponent,
    NavbarComponent,
    TrackFormComponent,
    PlaylistTracksComponent,
    TrackSearchComponent,
    TrackListComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
