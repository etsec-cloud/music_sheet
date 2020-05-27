import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  data: any[] = [
    {
      name: 'Imagine Dragons',
      img: 'https://i.scdn.co/image/01b36ca0f45f2f15117022a2754287a6ca1acdcc'
    }
  ];

  favorites = [];

  constructor() { }

  ngOnInit() {
    console.log(this.data[0]);
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
    console.log('FAVORITE : ' + this.isFavorite(name));
  }

}
