import { Component } from '@angular/core';
import { BigBanner } from '../../big-banner/big-banner/big-banner';
import { SimplySection } from '../../section-component/simply-section/simply-section';
import { VariableSectionComponent } from '../../variable-section/variable-section-component';
import { RightsideS } from '../../rightside-s/rightside-s';
import { SpecialSection2 } from '../../special-section-2/special-section-2';
import { EspecialSection1 } from '../../especial-section-1/especial-section-1';

@Component({
  selector: 'app-veterinarios-section',
  imports: [BigBanner, SimplySection, VariableSectionComponent, RightsideS, SpecialSection2, EspecialSection1],
  templateUrl: './veterinarios-section.html',
  styleUrl: './veterinarios-section.css',
  standalone: true,
})
export class VeterinariosSection {

}
