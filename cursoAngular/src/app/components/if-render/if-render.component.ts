// Criado por Camila Silva
// Desde 23/09/2022

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  canShow: boolean = false;

  name = "Anderson";

  idade = 23;

  constructor() { }

  ngOnInit(): void {
  }

}
