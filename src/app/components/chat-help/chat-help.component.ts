import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-help',
  templateUrl: './chat-help.component.html',
  styleUrls: ['./chat-help.component.css'],
  imports:[CommonModule,FormsModule],
  standalone:true
})
export class HelpChatComponent {
  isOpen = false;
  message = '';
  chatMessages: { text: string, type: 'user' | 'bot' }[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Aggiungi il messaggio predefinito all'inizializzazione
    this.chatMessages.push({ text: 'Come posso aiutarti oggi?', type: 'bot' });
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.chatMessages.push({ text: this.message, type: 'user' });
      this.chatService.getResponse(this.message).subscribe(response => {
        this.chatMessages.push({ text: response, type: 'bot' });
      });
      this.message = '';
    }
  }
}