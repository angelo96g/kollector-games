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
    this.loadProducts();  // Carica i prodotti all'inizializzazione
  }

  // Carica i prodotti dai file JSON
  private loadProducts() {
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
