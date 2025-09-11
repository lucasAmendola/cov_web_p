import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
    @Input() titulo: string = '';   
    @Input() texto: string = '';  

    @ViewChild('card', { static: true }) card!: ElementRef;

    onMouseMove(event: MouseEvent) {
      const card = this.card.nativeElement;
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 20;
      const rotateY = (x - centerX) / 20;

      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
      card.style.boxShadow = `${-rotateY * 4}px ${rotateX * 4}px 20px rgba(0, 0, 0, 0.2)`;
    }

    onMouseLeave() {
      const card = this.card.nativeElement;
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    }
}
