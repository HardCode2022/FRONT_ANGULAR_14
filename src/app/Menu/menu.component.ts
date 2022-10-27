import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

}
