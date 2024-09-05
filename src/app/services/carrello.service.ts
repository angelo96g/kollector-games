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
    // Verifica se il prodotto è già nel carrello
    const esisteNelCarrello = carrelloAttuale.find(item => item.id === prodotto.id);

    if (esisteNelCarrello) {
      // Se il prodotto è già nel carrello, incrementa la quantità
      esisteNelCarrello.quantity = (esisteNelCarrello.quantity || 1) + 1;
    } else {
      // Altrimenti aggiungi il prodotto con una quantità iniziale di 1
      this.elementiCarrello.next([...carrelloAttuale, { ...prodotto, quantity: 1 }]);
    }
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
