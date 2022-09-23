// Criado por Camila Silva
// Desde 23/09/2022
// Parte logica do componente contendo os dados 

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() Username!: string;

  @Input() data!: {name: string; age: number};

  @Input() colors!: {color1: string, color2: string, color3: string};

  constructor() { }

  ngOnInit(): void {
  }

}
