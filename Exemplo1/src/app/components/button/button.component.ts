// Criado por Camila Silva
// Desde 27/09/2022
// Este componente é responsável por mostrar as informações do usuário 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  showInfoBool: boolean = false;
  showContactBool: boolean = false;

  infoBasics = {
    name: "Camila Silva",
    age: 23,
    colorSkin: "white"
  }

  infoContact = {
    cel: 14991999990,
    cep: 11111111,
    number: 9999
  }

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(): void {
    this.showInfoBool = !this.showInfoBool;
  }

  showContact(): void {
    this.showContactBool = !this.showContactBool;
  }

}
