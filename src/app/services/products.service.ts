<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = new BehaviorSubject<any[]>([]); // Stato dei prodotti
  filteredProducts = this.products.asObservable(); // Stato dei prodotti filtrati

  constructor() {
    // Inizializzazione con alcuni prodotti di esempio
    this.products.next([
      { id: 1, title: 'The Legend of Zelda: Breath of the Wild', price: 59.99 },
      { id: 2, title: 'Mario Kart 8 Deluxe', price: 49.99 },
      { id: 3, title: 'Animal Crossing: New Horizons', price: 54.99 },
      // Altri prodotti...
    ]);
  }

  filterProducts(searchTerm: string) {
    const currentProducts = this.products.getValue();
    if (searchTerm) {
      // Filtra i prodotti basandosi sul titolo
      const filtered = currentProducts.filter(products =>
        products.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.products.next(filtered);
    } else {
      // Mostra tutti i prodotti se il termine di ricerca è vuoto
      this.products.next(currentProducts);
    }
  }
}
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = new BehaviorSubject<any[]>([]); // Stato dei prodotti
  filteredProducts = this.products.asObservable(); // Stato dei prodotti filtrati

  constructor() {
    // Inizializzazione con alcuni prodotti di esempio
    this.products.next([
      { id: 1, title: 'The Legend of Zelda: Breath of the Wild', price: 59.99 },
      { id: 2, title: 'Mario Kart 8 Deluxe', price: 49.99 },
      { id: 3, title: 'Animal Crossing: New Horizons', price: 54.99 },
      // Altri prodotti...
    ]);
  }

  filterProducts(searchTerm: string) {
    const currentProducts = this.products.getValue();
    if (searchTerm) {
      // Filtra i prodotti basandosi sul titolo
      const filtered = currentProducts.filter(products =>
        products.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.products.next(filtered);
    } else {
      // Mostra tutti i prodotti se il termine di ricerca è vuoto
      this.products.next(currentProducts);
    }
  }
}
>>>>>>> aa6ced4 (Primo commit)
