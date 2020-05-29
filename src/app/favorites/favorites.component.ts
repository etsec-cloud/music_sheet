import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {

  test: boolean;
  lists: any[] = [

    { name: 'a', lastname: 'g' },
    { name: 'b', lastname: 'f' },
    { name: 'c', lastname: 'e' },
    { name: 'd', lastname: 'd' },
    { name: 'e', lastname: 'c' },
    { name: 'f', lastname: 'b' },
    { name: 'g', lastname: 'a' },


  ];

  sorted: any;

  constructor() { }

  testas(){
    this.test = false;
    this.ngOnInit();
  }

  testos(){
    this.test = true;
    this.ngOnInit();
  }

  ngOnInit() {
    if(!this.test){
     this.lists.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    else{
     this.lists.sort((a, b) => a.lastname > b.lastname ? 1 : -1);
    }
  }

  seperateLetter(record, recordIndex, records){
    if(recordIndex == 0){
      return record.name[0].toUpperCase();
    }
    let first_prev = records[recordIndex - 1].name[0];
    let first_current= record.name[0];
    if (first_prev != first_current){
      return first_current.toUpperCase();
    }
    return null;
  }

}
