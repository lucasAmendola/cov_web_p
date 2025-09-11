import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmallBanner } from '../../small-banner/small-banner/small-banner';
import { SimplySection } from '../../section-component/simply-section/simply-section';
import { EspecialSection1 } from '../../especial-section-1/especial-section-1';
import { BgsComponent } from '../../bg-section/bgs-component/bgs-component';
import { LisSectionComponent } from '../../list-section/lis-section-component';

@Component({
  selector: 'app-familias-section',
  imports: [SmallBanner, SimplySection, EspecialSection1, RouterModule, BgsComponent, LisSectionComponent],
  templateUrl: './familias-section.html',
  styleUrl: './familias-section.css',
  standalone: true,
})
export class FamiliasSection {

}
