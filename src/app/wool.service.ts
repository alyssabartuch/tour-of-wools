import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Wool } from './wool';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WoolService {

    private woolsUrl = 'api/wools';


    //This is a typical "service-in-service" scenario: you inject the MessageService into the
    //  WoolService which is injected into the WoolsComponent.
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** GET wools from the server */
    getWools(): Observable<Wool[]> {
        return this.http.get<Wool[]>(this.woolsUrl).pipe(
            tap(wools => this.log(`fetched wools`)),
            catchError(this.handleError('getWools', []))
        );
    }

    /** GET wool by id. Will 404 if id not found */
    getWool(id: number): Observable<Wool> {
        const url = `${this.woolsUrl}/${id}`;
        return this.http.get<Wool>(url).pipe(
            tap(_ => this.log(`fetched wool id=${id}`)),
            catchError(this.handleError<Wool>(`getWool id=${id}`))
        );
    }

    updateWool (wool : Wool) Observable<any> {
        return this.http.put(this.woolsUrl, wool, httpOptions).pipe(
            tap(_ => this.log('updated wool id=${wool.id}')),
            catchError(this.handleError<any>('updateWool'))
        );

    }

    /** POST: add a new hero to the server */
    addHero (hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
            tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError<Hero>('addHero'))
        );
    }



    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


        /** Log a WoolService message with the MessageService */
    private log(message: string) {

      this.messageService.add('WoolService: ' + message);
    }

}
