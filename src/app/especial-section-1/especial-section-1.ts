import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-especial-section-1',
  standalone: true,
  imports: [],
  templateUrl: './especial-section-1.html',
  styleUrl: './especial-section-1.css'
})
export class EspecialSection1 {
    @Input() imagen: string = '';
    @Input() titulo: string = '';
    @Input() p1: string = '';
    @Input() p2: string = '';
    @Input() p3: string = '';
}
