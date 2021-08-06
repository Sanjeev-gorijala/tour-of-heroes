import { Injectable } from '@angular/core';

import { Hero } from '../Interfaces/Hero';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
private heroesurl='api/heroes';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesurl)
        .pipe(
          tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }

  
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesurl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );

  
}

  
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

/** update hero */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesurl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

/** add new hero**/
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesurl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}

/** delete the hero  */
deleteHero(id: number): Observable<Hero> {
  const url = `${this.heroesurl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}


 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };

  
}
}
