import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-banner',
  standalone: true,     // 👈 IMPORTANTE  imports: [],
  templateUrl: './small-banner.html',
  styleUrl: './small-banner.css'
})
export class SmallBanner {
  @Input() titulo: string = '';
  @Input() imagen: string = '';
}
