import { CarrelloService } from './../../services/carrello.service';
import { PcService } from './../../services/pc.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class PcComponent implements OnInit {
  products: any[] = [];

  constructor(private PcService: PcService, private CarrelloService: CarrelloService) { }

  ngOnInit(): void {
    // Chiama il metodo getProducts del servizio quando il componente viene inizializzato
    this.PcService.getProducts().subscribe(
      (data) => {
        this.products = data;  // Assegna i dati dei prodotti alla variabile products
      },
      (error) => {
        console.error('Errore durante il recupero dei prodotti:', error);
      }
    );
  }
  
  aggiungiAlCarrello(prodotto: any) {
    this.CarrelloService.aggiungiAlCarrello(prodotto);  // Aggiungi il prodotto al carrello tramite il servizio
  }
}
