<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Array per contenere i prodotti

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // Sottoscrizione agli aggiornamenti dei prodotti filtrati
    this.productsService.filteredProducts.subscribe((products: any[]) => {
      this.products = products;
    });
  }
}
=======
import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Array per contenere i prodotti

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // Sottoscrizione agli aggiornamenti dei prodotti filtrati
    this.productsService.filteredProducts.subscribe((products: any[]) => {
      this.products = products;
    });
  }
}
>>>>>>> aa6ced4 (Primo commit)
