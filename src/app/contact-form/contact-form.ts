import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  contactForm: FormGroup;
  sending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      telefono: [''],
      direccion: [''],
      asunto: ['Consulta', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.successMessage = '';
    this.errorMessage = '';

    const serviceID = 'service_xim9v3r';
    const templateID = 'template_v3uttnb';
    const publicKey = 'Qoz6X-h4Xe9eZGOKu';

    const params = {
      nombre: this.contactForm.value.nombre,
      mail: this.contactForm.value.mail,
      telefono: this.contactForm.value.telefono || 'No proporcionado',
      direccion: this.contactForm.value.direccion || 'No proporcionado',
      asunto: this.contactForm.value.asunto
    };

    emailjs
      .send(serviceID, templateID, params, publicKey)
      .then(() => {
        this.successMessage = 'Mensaje enviado con éxito 🎉';
        this.contactForm.reset();
      })
      .catch(() => {
        this.errorMessage = 'Hubo un error enviando el mensaje ❌';
      })
      .finally(() => {
        this.sending = false;
      });
  }
}
