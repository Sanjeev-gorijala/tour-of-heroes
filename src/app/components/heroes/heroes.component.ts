import { Component, OnInit } from '@angular/core';

import {Hero} from "../../Interfaces/Hero";

import { HeroService } from '../../services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes?: Hero[];
  
  constructor(private heroservice: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

}
