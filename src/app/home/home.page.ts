import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: SpotifyService,  private router: Router) {}

  ngOnInit() {
    this.service.initAPI();
  }

  open(artist) {
    let artisteuh;
    this.service.getArtist(artist).subscribe((data) => {

      artisteuh = data['artists']['items'][0];
      this.router.navigate(['/artist'], {state: {data: artisteuh}});
    });
  }

}
