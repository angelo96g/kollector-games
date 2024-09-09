import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormsModule,  } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  searchTerm: string = ''; // Variabile per l'input di ricerca
  filteredProducts$: Observable<any[]> | undefined

  constructor(private productsService: ProductsService) {} // Inietta il servizio

  onSearch() {
    this.productsService.filterProducts(this.searchTerm); // Chiama il metodo di filtro del servizio

  }
  onSearchInputChange() {
    this.productsService.filterProducts(this.searchTerm);  // Filtra i prodotti in base all'input di ricerca
  }
}