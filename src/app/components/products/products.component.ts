import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports :[CommonModule],
  standalone:true,
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // Iscriviti ai prodotti filtrati e aggiornali nel template
    this.productsService.getFilteredProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
