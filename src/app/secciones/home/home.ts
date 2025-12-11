import { Component } from '@angular/core';
import { SimplySection } from '../../section-component/simply-section/simply-section';
import { Servicios } from '../../servicios/servicios';
import { ContactPage } from '../../contact-page/contact-page';
import { LisSectionComponent } from '../../list-section/lis-section-component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [SimplySection, Servicios, ContactPage, LisSectionComponent, CarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {

}
