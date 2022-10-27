import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenu',
  templateUrl: './bienvenu.component.html',
  styleUrls: ['./bienvenu.component.css']
})
export class BienvenuComponent implements OnInit {

  bienvenu: string = 'Bienvenu sur mon site . Pour gerer la liste des utilisateurs cliquer : '

  constructor() { }

  ngOnInit(): void {
  }

}
