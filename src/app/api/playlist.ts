import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PlaylistAPI {
  constructor(private http: HttpClient) {  }

  query(params = {}) {
    return this.http.get(`${environment.apiEndpoint}/playlists`, { params: params });
  }
}
