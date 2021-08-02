import { Component, OnInit } from '@angular/core';

import {Hero} from "../../Interfaces/Hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 heroes: Hero[] = [
    { id: 1, name: 'Dr Strange' },
    { id: 2, name: 'Hulk' },
    { id: 3, name: 'Wanda' },
    { id: 4, name: 'Vision' },
    { id: 5, name: 'IronMan' },
    { id: 6, name: 'Captain America' },
    { id: 7, name: 'Thor' },
    { id: 8, name: 'Loki' },
    { id: 9, name: 'Hawk Eye' },
    { id: 10, name: 'Thanos' }
  ];

  selectedHero?: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
  }

}
