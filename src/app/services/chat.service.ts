import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getResponse(message: string): Observable<string> {
    // Simula una risposta basata sul messaggio dell'utente
    const response = this.generateResponse(message);
    return of(response);
  }

  private generateResponse(message: string): string {
    // Logica semplice per generare risposte
    if (message.toLowerCase().includes('help')) {
      return 'Come posso aiutarti?';
    }
    if (message.toLowerCase().includes('hello')) {
      return 'Ciao! Come posso aiutarti oggi?';
    }
    return 'Mi dispiace, non ho capito la tua richiesta.';
  }
}
