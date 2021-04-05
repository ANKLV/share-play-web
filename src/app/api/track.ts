import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class TrackAPI {
  constructor(private http: HttpClient) {  }

  query(params = {}) {
    return this.http.get(`${environment.apiEndpoint}/api/v1/track`, { params: params });
  }

  create(params:any) {
    return this.http.post(`${environment.apiEndpoint}/api/v1/track`, params);
  }

  delete(id:number) {
    return this.http.delete(`${environment.apiEndpoint}/api/v1/track/${id}`);
  }
}
