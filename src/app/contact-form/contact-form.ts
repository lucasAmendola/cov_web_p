import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm{
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      telefono: [''],
      direccion: [''],
      asunto: ['Consulta', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Datos del formulario:', this.contactForm.value);
      // Aquí podés hacer la lógica de envío (ej: llamar a un servicio HTTP)
    } else {
      console.log('Formulario inválido');
    }
  }
}
