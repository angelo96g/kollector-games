import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { XboxProductsService } from '../../services/xbox-products.service';
import { CarrelloService } from './../../services/carrello.service';
@Component({
  selector: 'app-xbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './xbox.component.html',
  styleUrl: './xbox.component.css'
})
export class XboxComponent implements OnInit {
  products: any[] = [];  // Variabile per conservare i dati dal JSON

  constructor(private xboxProductsService: XboxProductsService, private carrelloService: CarrelloService ) { }  // Iniettare il servizio

  ngOnInit(): void {
    this.xboxProductsService.getProducts().subscribe(  // Utilizzare il servizio correttamente
      (response) => {
        this.products = response;  // Assegna i dati alla variabile
        console.log(this.products);  // Controlla i dati nella console
      },
      (error) => {
        console.error('Errore nel recupero dei dati', error);
      }
    );
  }
  aggiungiAlCarrello(prodotto: any) {
    this.carrelloService.aggiungiAlCarrello(prodotto);  // Aggiungi il prodotto al carrello tramite il servizio
  }
}
