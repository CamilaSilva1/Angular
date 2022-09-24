// Criado por Camila Silva
// Desde 24/09/2022

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  showMsg1: boolean = false;
  showMsg2: boolean = false;
  msg: string = "Esta é a segunda mensagem";

  constructor() { }

  ngOnInit(): void {
  }

  showMsgFunction(): void{
      this.showMsg1 = !this.showMsg1;
  }

  showSecondMsgFunction(): void {
      this.showMsg2 = !this.showMsg2;

  }

}
