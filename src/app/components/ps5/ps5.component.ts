<<<<<<< HEAD
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
=======


// import { Component, OnInit } from '@angular/core';
// import { CarrelloService } from '../../services/carrello.service';  // Importa il servizio
// import { Ps5ProductsService } from '../../services/ps5-products.service';  // Importa il servizio dei prodotti PS5
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-ps5',
//   templateUrl: './ps5.component.html',
//   styleUrls: ['./ps5.component.css'],
//   imports:[CommonModule],
//   standalone:true
// })
// export class Ps5Component implements OnInit {
//   prodotti: any[] = [];

//   constructor(private carrelloService: CarrelloService, private ps5ProductsService: Ps5ProductsService) { }

//   ngOnInit() {
//     this.ps5ProductsService.getProducts().subscribe((prodotti) => {
//       this.prodotti = prodotti;
//     });
//   }

//   // Metodo per aggiungere un prodotto al carrello
//   aggiungiAlCarrello(prodotto: any) {
//     this.carrelloService.aggiungiAlCarrello(prodotto);
//     alert(`${prodotto.title} aggiunto al carrello!`);
//   }
// }






import { CarrelloService } from './../../services/carrello.service';
>>>>>>> f6be129 (aggiornamenti)
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

  constructor(private ps5ProductsService: Ps5ProductsService, private carrelloService: CarrelloService) { }  // Iniettare il servizio

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
