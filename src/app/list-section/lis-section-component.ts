import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // 👈 Importar esto para *ngFor y *ngIf

@Component({
  selector: 'app-lis-section-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lis-section-component.html',
  styleUrl: './lis-section-component.css'
})
export class LisSectionComponent {
      @Input() title: string = '';
      @Input() paragraph: string = '';
      @Input() items: string[] = [];
}
