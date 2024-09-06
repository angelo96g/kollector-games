
import { CommonModule } from '@angular/common';
import { ActionfigureService } from './../../services/actionfigure.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actionfigure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actionfigure.component.html',
  styleUrls: ['./actionfigure.component.css'] // Correzione da 'styleUrl' a 'styleUrls'
})
export class ActionfigureComponent {
  actionFigures: any[] = [];

  constructor(private actionfigureService: ActionfigureService) {}

  ngOnInit(): void {
    this.actionfigureService.getData().subscribe(response => {
      this.actionFigures = response; // Assegna direttamente la risposta JSON
    });
  }
}
