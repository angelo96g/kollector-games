import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ps5ProductsService {
  private jsonURL = '/assets/ps5-products.json';  // Percorso del file JSON

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
