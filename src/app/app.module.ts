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
import { LogInComponent } from './components/log-in/log-in.component';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './providers/token.interceptor';
import { ErrorInterceptor } from './providers/error.interceptor';

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
    SignUpComponent,
    LogInComponent
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
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
