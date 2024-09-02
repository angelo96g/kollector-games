<<<<<<< HEAD
import { Ps5ProductsService } from '../../services/ps5-products.service';  // Assicurati che il percorso sia corretto
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ps5',
  standalone:true,
  templateUrl: './ps5.component.html',
  styleUrls: ['./ps5.component.css'],
  imports:[CommonModule]
})
export class Ps5Component implements OnInit {
  products: any[] = [];  // Variabile per conservare i dati dal JSON

  constructor(private ps5ProductsService: Ps5ProductsService) { }  // Iniettare il servizio

  ngOnInit(): void {
    this.ps5ProductsService.getProducts().subscribe(  // Utilizzare il servizio correttamente
      (response) => {
        this.products = response;  // Assegna i dati alla variabile
        console.log(this.products);  // Controlla i dati nella console
      },
      (error) => {
        console.error('Errore nel recupero dei dati', error);
      }
    );
  }
}
=======
import { Ps5ProductsService } from '../../services/ps5-products.service';  // Assicurati che il percorso sia corretto
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ps5',
  standalone:true,
  templateUrl: './ps5.component.html',
  styleUrls: ['./ps5.component.css'],
  imports:[CommonModule]
})
export class Ps5Component implements OnInit {
  products: any[] = [];  // Variabile per conservare i dati dal JSON

  constructor(private ps5ProductsService: Ps5ProductsService) { }  // Iniettare il servizio

  ngOnInit(): void {
    this.ps5ProductsService.getProducts().subscribe(  // Utilizzare il servizio correttamente
      (response) => {
        this.products = response;  // Assegna i dati alla variabile
        console.log(this.products);  // Controlla i dati nella console
      },
      (error) => {
        console.error('Errore nel recupero dei dati', error);
      }
    );
  }
}
>>>>>>> aa6ced4 (Primo commit)
