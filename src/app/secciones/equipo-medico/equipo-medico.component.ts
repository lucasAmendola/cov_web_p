import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplySection } from '../../section-component/simply-section/simply-section';
import { MedicoComponent } from '../../medico/medico.component';
import { SmallBanner } from '../../small-banner/small-banner/small-banner';

@Component({
  selector: 'app-equipo-medico',
  standalone: true,
  imports: [SimplySection, CommonModule, MedicoComponent, SmallBanner],
  templateUrl: './equipo-medico.component.html',
  styleUrl: './equipo-medico.component.css'
})
export class EquipoMedicoComponent{
}
