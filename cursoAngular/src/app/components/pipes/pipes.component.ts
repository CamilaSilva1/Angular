import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  testText: string = "Testando o pipe operator";

  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
