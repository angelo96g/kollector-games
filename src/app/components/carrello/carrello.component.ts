import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
  imports:[CommonModule],
  standalone:true
})
export class CarrelloComponent implements OnInit {
  elementiCarrello: any[] = [];

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    // Sottoscrizione per ottenere gli elementi aggiornati nel carrello
    this.carrelloService.ottieniElementiCarrello().subscribe(elementi => {
      this.elementiCarrello = elementi;  // Assegna i dati aggiornati
    });
  }

  rimuoviElemento(elemento: any) {
    this.carrelloService.rimuoviDalCarrello(elemento);
  }

  svuotaCarrello() {
    this.carrelloService.svuotaCarrello();
  }
}
