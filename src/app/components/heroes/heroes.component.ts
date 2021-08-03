import { Component, OnInit } from '@angular/core';

import {Hero} from "../../Interfaces/Hero";

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];

  selectedHero?: Hero;
  
  constructor(private heroservice: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
  }

  getHeroes(): void{
    this.heroes=this.heroservice.getHeroes();
  }

}
