import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class CarrelloComponent implements OnInit {
  elementiCarrello: any[] = [];
  totaleCarrello: number = 0; // Aggiunto per il totale del carrello

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    // Sottoscrizione per ottenere gli elementi aggiornati nel carrello
    this.carrelloService.ottieniElementiCarrello().subscribe(elementi => {
      this.elementiCarrello = elementi;  // Assegna i dati aggiornati
      this.totaleCarrello = this.carrelloService.calcolaTotale(); // Calcola il totale ogni volta che il carrello cambia
    });
  }

  rimuoviElemento(elemento: any) {
    this.carrelloService.rimuoviDalCarrello(elemento);
  }

  svuotaCarrello() {
    this.carrelloService.svuotaCarrello();
  }
}
