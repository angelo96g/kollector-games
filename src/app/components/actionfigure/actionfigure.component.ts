import { Component, OnInit } from '@angular/core';
import { ActionfigureService } from '../../services/actionfigure.service';
import { CarrelloService } from '../../services/carrello.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-figures',
  standalone: true,
  templateUrl: './actionfigure.component.html',
  styleUrls: ['./actionfigure.component.css'],
  imports: [CommonModule]
})
export class ActionFigureComponent implements OnInit {
  actionFigures: any[] = [];  // Variabile per conservare i dati delle action figures

  constructor(private actionfigureService: ActionfigureService, private carrelloService: CarrelloService) { }

  ngOnInit(): void {
    this.actionfigureService.getData().subscribe(
      (response) => {
        this.actionFigures = response;
        console.log(this.actionFigures);
      },
      (error) => {
        console.error('Errore nel recupero dei dati', error);
      }
    );
  }

  aggiungiAlCarrello(figure: any) {
    this.carrelloService.aggiungiAlCarrello(figure);
  }
}
