import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  
  test: boolean;
  oui:string;
  lists: any[] = [

    { name: 'a', lastname: 'g', letter: 'A', letter2: 'g' },
    { name: 'b', lastname: 'f', letter: 'B', letter2: 'f' },
    { name: 'c', lastname: 'e', letter: 'C', letter2: 'e' },
    { name: 'd', lastname: 'd', letter: 'D', letter2: 'd' },
    { name: 'e', lastname: 'c', letter: 'E', letter2: 'c' },
    { name: 'f', lastname: 'b', letter: 'F', letter2: 'b' },
    { name: 'g', lastname: 'a', letter: 'G', letter2: 'a' },


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
     const letter= this.lists[1].name.substr(0);
     console.log(letter)
    }
    else{
     this.lists.sort((a, b) => a.lastname > b.lastname ? 1 : -1);
     const letter= this.lists[1].lastname.substr(0);
     console.log(letter)
    }
  }
  separateLetter(record, recordIndex, records){
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
