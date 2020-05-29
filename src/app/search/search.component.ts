import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  results = [];

  favorites = [];

  isSearching = false;

  constructor(public service: SpotifyService) { }

  ngOnInit() {
    this.service.initAPI();
  }

  onInput(event) {
    const search = event.srcElement.value;
    this.isSearching = true;
    this.results = [];

    if (!search) {
      this.isSearching = false;
      return;
    }

    this.service.search(search).subscribe((data) => {

      const temp = [];
      temp[0] = data['artists']['items'];
      temp[1] = data['tracks']['items'];

      this.results = this.shuffle(temp[0].concat(temp[1]));
      this.isSearching = false;
    });
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  onCancel(event) {
    this.results = [];
    this.isSearching = false;
  }

  isFavorite(name) {
    return this.favorites.includes(name);
  }

  favorite(name) {
    if (this.isFavorite(name)) {
      const index = this.favorites.indexOf(name);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    } else {
      this.favorites.push(name);
    }
  }

}
