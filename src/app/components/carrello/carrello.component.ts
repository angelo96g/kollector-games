// carrello.component.ts
import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  elementiCarrello: any[] = [];

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    this.carrelloService.ottieniElementiCarrello().subscribe(elementi => {
      this.elementiCarrello = elementi;
    });
  }

  rimuoviElemento(elemento: any) {
    this.carrelloService.rimuoviDalCarrello(elemento);
  }

  svuotaCarrello() {
    this.carrelloService.svuotaCarrello();
  }
}
