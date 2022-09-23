// Criado por Camila Silva
// Desde 21/09/2022
// Este componente é responsavel por dados não simbolicos ainda

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

    name: string = "Camila";
    age: number = 23;
    hobbies = ["Correr", "Ler", "Jogar"];
    car = {
      name: "Polo",
      year: 2008,
    }

  constructor() { }

  ngOnInit(): void {
  }

}
