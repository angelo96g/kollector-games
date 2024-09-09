import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = new BehaviorSubject<any[]>([]);  // Stato globale dei prodotti
  private filteredProducts = new BehaviorSubject<any[]>([]);  // Stato dei prodotti filtrati

  constructor(private http: HttpClient) {
    this.loadLocalProducts();  // Carica i prodotti locali all'inizializzazione
    this.loadServerProducts();  // Carica i prodotti dal server Node.js
  }

  // Carica i prodotti dai file JSON locali
  private loadLocalProducts() {
    const urls = [
      'assets/ps5-products.json',
      'assets/xbox-products.json',
      'assets/nintendoswitch-products.json'
    ];

    urls.forEach(url => {
      this.http.get<any[]>(url).subscribe(data => {
        const currentProducts = this.products.getValue();
        this.products.next([...currentProducts, ...data]);  // Aggiorna la lista di prodotti
        this.filteredProducts.next([...currentProducts, ...data]);  // Aggiorna anche i prodotti filtrati
      });
    });
  }

  // Carica i prodotti dal server Node.js
  private loadServerProducts() {
    const serverUrl = 'http://localhost:3000/action-figures'; // Assicurati che l'URL sia corretto

    this.http.get<any[]>(serverUrl).subscribe(
      data => {
        console.log('Dati ricevuti dal server:', data); // Log per il debug
        const currentProducts = this.products.getValue();
        this.products.next([...currentProducts, ...data]);  // Aggiorna la lista di prodotti
        this.filteredProducts.next([...currentProducts, ...data]);  // Aggiorna anche i prodotti filtrati
      },
      error => {
        console.error('Errore nel recupero dei dati dal server:', error);
      }
    );
  }

  // Filtra i prodotti in base al termine di ricerca
  filterProducts(searchTerm: string) {
    const currentProducts = this.products.getValue();
    if (searchTerm) {
      const filtered = currentProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.filteredProducts.next(filtered);  // Aggiorna i prodotti filtrati
    } else {
      this.filteredProducts.next(currentProducts);  // Mostra tutti i prodotti se il termine di ricerca è vuoto
    }
  }

  // Restituisce l'osservabile dei prodotti filtrati
  getFilteredProducts(): Observable<any[]> {
    return this.filteredProducts.asObservable();
  }
  
}
