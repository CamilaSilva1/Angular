// Criado por Camila Silva
// Desde 26/09/2022

import { Component, OnInit } from '@angular/core';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent implements OnInit {

  desenvolvedorNome: string = "Camila Silva";

  iconInstagram = faInstagram;
  iconGit = faGithub;

  constructor() {}

  ngOnInit(): void {
  }


}
