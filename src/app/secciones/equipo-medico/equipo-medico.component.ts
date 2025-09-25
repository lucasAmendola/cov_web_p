import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplySection } from '../../section-component/simply-section/simply-section';

@Component({
  selector: 'app-equipo-medico',
  standalone: true,
  imports: [SimplySection, CommonModule],
  templateUrl: './equipo-medico.component.html',
  styleUrl: './equipo-medico.component.css'
})
export class EquipoMedicoComponent {

}
