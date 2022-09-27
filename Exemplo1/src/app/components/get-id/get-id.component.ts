// Criado por Camila Silva
// Desde 26/09/2022
// Ts responsável pelo emitter do gerador de id

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css']
})
export class GetIdComponent implements OnInit {

  @Output() gettingId: EventEmitter<any> = new EventEmitter();

  idNumber: number = 0;

  showIdBool: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleId(): void {

    this.gettingId.emit();

    this.randomId();

    this.showIdFunction();

  }

  randomId(): void {

    this.idNumber = Math.floor(Math.random() * 10);

  }

  showIdFunction(): void {
    this.showIdBool = !this.showIdBool;
  }

}
