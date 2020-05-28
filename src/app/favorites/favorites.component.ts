import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  
  test:boolean;
  lists: any[] = [ 

    { name: "a", lastname:"g" }, 
    { name: "b" ,lastname:"f" }, 
    { name: "c",lastname:"e" }, 
    { name: "d",lastname:"d" }, 
    { name: "e" ,lastname:"c"}, 
    { name: "f" ,lastname:"b"}, 
    { name: "g" ,lastname:"a"}, 

  
  ];
  sorted: any;


  constructor() { }

  testas(){
   this.test = !this.test
   this.ngOnInit();
   console.log(this.test)
  }

  testos(){
    this.test = !this.test
    this.ngOnInit();
    console.log(this.test)
   }
  

  ngOnInit() {

    if(!this.test){
      const sorted = this.lists.sort((a, b) => a.name > b.name ? 1 : -1);
      const grouped = sorted.reduce((groups, contact) => {
        const letter = contact.name.charAt(0);

        groups[letter] = groups[letter] || [];
        groups[letter].push(contact);

        return groups;

      }, {});
      
      const result = Object.keys(grouped).map(key => ({key, lists: grouped[key]}));
      console.log(result);
      
    }

    else{
      
      const sorted = this.lists.sort((a, b) => a.lastname > b.name ? 1 : -1);
      const grouped = sorted.reduce((groups, contact) => {
        const letter = contact.lastname.charAt(0);
 
        groups[letter] = groups[letter] || [];
        groups[letter].push(contact);
 
        return groups;
        }, {});
        
      const result = Object.keys(grouped).map(key => ({key, lists: grouped[key]}));
      console.log(result);
    }


    

  }

}
