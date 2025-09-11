import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simply-section',
  imports: [CommonModule],
  standalone: true,     // 👈 IMPORTANTE  imports: [],
  templateUrl: './simply-section.html',
  styleUrl: './simply-section.css'
})
export class SimplySection {
      @Input() title: string = '';
      @Input() paragraph: string = '';
      @Input() paragraph2: string = '';
      @Input() paragraph3: string = '';
      @Input() paragraph4: string = '';
}
