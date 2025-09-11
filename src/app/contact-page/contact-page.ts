import { Component } from '@angular/core';
import { ContactInfo } from '../contact-info/contact-info';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  selector: 'app-contact-page',
  imports: [ContactInfo, ContactForm],
  standalone: true,
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {

}
