import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animalDetails: string = '';

  animals: Animal[] = [

    { name: 'Bidu', type: 'Dog', age: 2 },
    { name: 'Frida', type: 'Cat', age: 4 },
    { name: 'Quiquinho', type: 'Rabbit', age: 6 },

  ];

  pessoas = [

      { name: 'Camila', age: 23},
      { name: 'Anderson', age: 30},
      { name: 'Cido', age: 57},
      { name: 'Maria', age: 54},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  showAgeAnimal(animal: Animal): void {

      this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;

  }

}
