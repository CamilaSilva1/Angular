import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  category: string = "Rabbit";
  
  data = {
        name: "Quiquinho",
        age: 6,
        color: "White"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
