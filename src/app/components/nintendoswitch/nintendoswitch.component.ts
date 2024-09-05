
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NintendoswitchProductsService } from '../../services/nintendoswitch-products.service';

@Component({
  selector: 'app-nintendoswitch',
  standalone:true,
  templateUrl: './nintendoswitch.component.html',
  styleUrls: ['./nintendoswitch.component.css'],
  imports:[CommonModule]
})
export class nintendoswitchComponent implements OnInit {
  products: any[] = [];  // Variabile per conservare i dati dal JSON

  constructor(private nintendoswitchProductsService: NintendoswitchProductsService) { }  // Iniettare il servizio

  ngOnInit(): void {
    this.nintendoswitchProductsService.getProducts().subscribe(  // Utilizzare il servizio correttamente
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
