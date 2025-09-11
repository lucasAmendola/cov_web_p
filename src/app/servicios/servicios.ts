import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
  standalone: true,
})
export class Servicios {
  @Input() title?: string;
  @Input() img?: string;
  @Input() img2?: string;  
  @Input() img3?: string;
  @Input() subtitulo?: string;
  @Input() subtitulo2?: string;
  @Input() subtitulo3?: string;
}
