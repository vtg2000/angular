import { Component, OnInit } from '@angular/core';

import { Hero } from '../goods';
import { HeroService } from '../goods.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/