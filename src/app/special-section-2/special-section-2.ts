import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-section-2',
  imports: [],
  templateUrl: './special-section-2.html',
  styleUrl: './special-section-2.css',
  standalone: true,
})
export class SpecialSection2 {
    @Input() bcImage: string = '';   // imagen de fondo
}
