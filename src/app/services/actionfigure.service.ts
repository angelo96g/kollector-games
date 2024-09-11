import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ActionfigureService {
  private apiUrl = 'http://localhost:3000/action-figures'; // URL corretto del server Node.js

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
