import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  

  lists: any[] = [ 

    { name: "oui" }, 
    { name: "odei" }, 
    { name: "ai" }, 
    { name: "abi" }, 
    { name: "aabi" }, 
    { name: "bi" }, 
    { name: "cui" }, 

  
  ];
  sorted: any;


  constructor() { }


  ngOnInit() {

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

}
