// carrello.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private elementiCarrello = new BehaviorSubject<any[]>([]);  // Stato dei prodotti nel carrello
  elementiCarrello$ = this.elementiCarrello.asObservable();  // Osservabile per i componenti

  // Metodo per aggiungere un prodotto al carrello
  aggiungiAlCarrello(prodotto: any) {
    const carrelloAttuale = this.elementiCarrello.getValue();
    this.elementiCarrello.next([...carrelloAttuale, prodotto]);
  }

  // Metodo per ottenere i prodotti nel carrello
  ottieniElementiCarrello() {
    return this.elementiCarrello$;
  }

  // Metodo per rimuovere un prodotto dal carrello
  rimuoviDalCarrello(prodotto: any) {
    const carrelloAttuale = this.elementiCarrello.getValue();
    const nuovoCarrello = carrelloAttuale.filter(item => item.id !== prodotto.id);
    this.elementiCarrello.next(nuovoCarrello);
  }

  // Metodo per svuotare il carrello
  svuotaCarrello() {
    this.elementiCarrello.next([]);
  }
}
