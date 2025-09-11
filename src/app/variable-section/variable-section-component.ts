import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCard } from '../small-card/small-card';

@Component({
  selector: 'app-variable-section-component',
  imports: [SmallCard, CommonModule],
  templateUrl: './variable-section-component.html',
  styleUrl: './variable-section-component.css',
  standalone: true,
})
export class VariableSectionComponent {
  @Input() foto?: string;
  @Input() titulo?: string;
  @Input() parrafo?: string;
}
