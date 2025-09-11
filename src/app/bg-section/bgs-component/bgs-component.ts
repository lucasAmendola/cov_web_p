import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card-component';


@Component({
  selector: 'app-bgs-component',
  imports: [CommonModule, CardComponent],
  standalone: true,
  templateUrl: './bgs-component.html',
  styleUrl: './bgs-component.css'
})
export class BgsComponent {
    @Input() bcImage: string = '';   // imagen de fondo
}
