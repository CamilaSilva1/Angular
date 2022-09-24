// Criado por Camila Silva
// Desde 24/09/2022

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void {

    this.myNumber = Math.floor(Math.random() * 5);

  }

}
