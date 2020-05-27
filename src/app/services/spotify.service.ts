import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url = 'https://api.spotify.com/v1';
  urlAuth = 'https://accounts.spotify.com/api/token';
  token = '';
  init = false;

  constructor(private http: HttpClient) { }

  initAPI() {
    this.getToken().subscribe((data) => {
      // tslint:disable-next-line:no-string-literal
      this.token = data['access_token'];
      this.init = true;
    });
  }

  getToken() {
    const username = '2e25c7abe3504abca16fb3e6a1a116f6';
    const password = '06c2be880e114a49ab97dc8bb8669bdc';

    const b64 = Buffer.from(`${username}:${password}`, 'utf8').toString(
      'base64'
    );

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + b64
      })
    };

    return this.http.post(`${this.urlAuth}?grant_type=client_credentials`, null, httpOptions)
      .pipe();
  }

  search(query: string) {
    if(!this.init) {
      this.initAPI();
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.token
      })
    };

    return this.http.get(`${this.url}/search/?q=${query}&type=track,artist&market=FR&limit=15&offset=1`, httpOptions)
    .pipe();
  }
}
