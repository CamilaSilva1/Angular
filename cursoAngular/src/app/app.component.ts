import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Username: string = "Camila";

  data = {
      name: "Anderson",
      age: 29
  }

  colors = {
      color1: "Purple",
      color2: "Black",
      color3: "Red"
  }

  title = 'cursoAngular';
}
