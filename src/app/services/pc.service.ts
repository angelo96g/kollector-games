import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PcService {
  private apiUrl = environment.apiUrl;  // Endpoint del backend per recuperare i prodotti

  constructor(private http: HttpClient) { }

  // Metodo per recuperare tutti i prodotti
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
