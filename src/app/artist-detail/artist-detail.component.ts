import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
})
export class ArtistDetailComponent implements OnInit {

  data: [];

  constructor() { }

  ngOnInit() {
    this.data = history.state.data;
  }

}
