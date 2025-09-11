import { Component, Input } from '@angular/core';
import { SmallCard } from '../small-card/small-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rightside-s',
  standalone: true,
  imports: [SmallCard, CommonModule],
  templateUrl: './rightside-s.html',
  styleUrl: './rightside-s.css'
})
export class RightsideS {
  @Input() foto?: string;
  @Input() titulo?: string;
  @Input() parrafo?: string;
}
