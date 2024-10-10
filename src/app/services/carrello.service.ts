import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private elementiCarrello = new BehaviorSubject<any[]>(this.ottieniCarrelloDaStorage()); // Stato iniziale dal localStorage
  elementiCarrello$ = this.elementiCarrello.asObservable(); // Osservabile per i componenti

  // Metodo per ottenere gli elementi dal localStorage
  private ottieniCarrelloDaStorage(): any[] {
    const carrello = localStorage.getItem('carrello');
    return carrello ? JSON.parse(carrello) : []; // Se c'è un carrello nel localStorage, parse e restituiscilo, altrimenti restituisci un array vuoto
  }

  // Metodo per ottenere gli elementi nel carrello come osservabile
  ottieniElementiCarrello() {
    return this.elementiCarrello$;
  }

  // Metodo per aggiungere un prodotto al carrello
  aggiungiAlCarrello(prodotto: any) {
    const carrelloAttuale = this.elementiCarrello.getValue();
    const esisteNelCarrello = carrelloAttuale.find(item => item.id === prodotto.id);

    if (esisteNelCarrello) {
      esisteNelCarrello.quantity = (esisteNelCarrello.quantity || 1) + 1;
    } else {
      const prezzo = Number(prodotto.price) || 0; // Assicurati che il prezzo sia un numero
      this.elementiCarrello.next([...carrelloAttuale, { ...prodotto, price: prezzo, quantity: 1 }]);
    }
    
    this.salvaCarrelloInStorage(); // Salva il carrello aggiornato nel localStorage
  }

  // Metodo per rimuovere un prodotto dal carrello
  rimuoviDalCarrello(prodotto: any) {
    const carrelloAttuale = this.elementiCarrello.getValue();
    const nuovoCarrello = carrelloAttuale.filter(item => item.id !== prodotto.id);
    this.elementiCarrello.next(nuovoCarrello);
    this.salvaCarrelloInStorage(); // Salva il carrello aggiornato nel localStorage
  }

  // Metodo per svuotare il carrello
  svuotaCarrello() {
    this.elementiCarrello.next([]);
    this.salvaCarrelloInStorage(); // Salva il carrello aggiornato nel localStorage
  }

  // Metodo per calcolare il totale del carrello
  calcolaTotale(): number {
    const carrelloAttuale = this.elementiCarrello.getValue();
    return carrelloAttuale.reduce((totale, item) => {
      const prezzo = Number(item.price) || 0; // Assicurati che il prezzo sia un numero
      const quantita = Number(item.quantity) || 0; // Assicurati che la quantità sia un numero
      return totale + (prezzo * quantita);
    }, 0);
  }

  // Metodo per salvare il carrello nel localStorage
  private salvaCarrelloInStorage() {
    const carrelloAttuale = this.elementiCarrello.getValue();
    localStorage.setItem('carrello', JSON.stringify(carrelloAttuale)); // Converte l'array in stringa e lo salva nel localStorage
  }
}
