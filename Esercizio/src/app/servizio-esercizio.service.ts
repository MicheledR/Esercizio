import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo } from './model/articolo';

@Injectable({
  providedIn: 'root'
})
export class ServizioEsercizioService {
/*
  Creare una pagina web che visualizzi gli articoli recuperati da questa API:https://y1nr9q07n8.execute-api.eu-west-1.amazonaws.com/dev

L'API accetta un unico parametro: {"url": ""} , chiamata senza parametri restituisce un elenco di articoli.

*/
  url : string = "https://y1nr9q07n8.execute-api.eu-west-1.amazonaws.com/dev";
  

  constructor(private http: HttpClient) { }

  getAllArticoli(): Observable<Articolo>{  
    const body = JSON.stringify({"url":""}); 
    const header = {'content-type' : 'application/string'};
    return this.http.post<Articolo>(this.url ,body, {'headers': header});
  }

  getArticolo(url:string): Observable<Articolo>{  
    const body = JSON.stringify({"url": url}); 
    const header = {'content-type' : 'application/string'};
    return this.http.post<Articolo>(this.url ,body, {'headers': header});
  }


  }


