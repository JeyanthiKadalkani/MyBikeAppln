import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
 
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {}

  ngOnInit() {
  }

  onSelect(hero: Hero){
    this.selectedHero=hero;
  }

}
