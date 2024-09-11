import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PcService {
   private apiUrl = 'http://localhost:3000/products'  // Endpoint del backend per recuperare i prodotti

  constructor(private http: HttpClient) { }

  // Metodo per recuperare tutti i prodotti
  getProducts(): Observable<any> {
     return this.http.get<any>(this.apiUrl);
  }
}
