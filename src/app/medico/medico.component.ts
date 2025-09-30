import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'] // 👈 corregí "styleUrl" a "styleUrls"
})
export class MedicoComponent implements AfterViewInit {
  @Input() img?: string;
  @Input() title?: string;
  @Input() prg?: string;
  @Input() title2?: string;
  @Input() prg2?: string;
  @Input() title3?: string;
  @Input() prg3?: string;
  @Input() title4?: string;
  @Input() prg4?: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const container: HTMLElement = this.el.nativeElement.querySelector('.medicContainer');

    // Agregamos una clase alternada según el orden del componente
    const index = Array.from(document.querySelectorAll('app-medico')).indexOf(this.el.nativeElement);
    if (index % 2 === 0) {
      container.classList.add('left');
    } else {
      container.classList.add('right');
    }

  // Fondo intercalado
  if (index % 2 === 0) {
    container.classList.add('bg-light');
    container.style.flexDirection = 'row'; // foto izquierda, texto derecha
  } else {
    container.classList.add('bg-dark');
    container.style.flexDirection = 'row-reverse'; // foto derecha, texto izquierda
  }
    // IntersectionObserver para activar animación al hacer scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('show');
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
  }
}
