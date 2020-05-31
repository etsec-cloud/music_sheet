import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partitions',
  templateUrl: './partitions.component.html',
  styleUrls: ['./partitions.component.scss'],
})
export class PartitionsComponent implements OnInit {

  favorites = [];

  constructor() { }

  ngOnInit() {}

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
