// Criado por Camila Silva
// Desde 23/09/2022
// Ts do componente diretivas

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  size = 44;
  font = "Arial";
  color = "green";

  classes = ['green-title', 'small-title'];

  constructor() { }

  ngOnInit(): void {
  }

}
