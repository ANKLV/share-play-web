import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PlaylistAPI {
  constructor(private http: HttpClient) {  }

  query(params = {}) {
    return this.http.get(`${environment.apiEndpoint}/api/v1/playlists`, { params: params });
  }

  create(params:any) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/playlists`, params);
  }
}
