import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDarkMode = false; // Stato del tema

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode; // Inverte il tema
    const themeClass = this.isDarkMode ? 'dark-theme' : 'light-theme';

    // Rimuove entrambe le classi per evitare conflitti
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');

    // Aggiunge la nuova classe
    this.renderer.addClass(document.body, themeClass);
  }
}