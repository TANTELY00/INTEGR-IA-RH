import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultat',
  imports: [CommonModule, ReactiveFormsModule,ButtonModule],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.css'
})
export class ResultatComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value.text);
    }
  }
}
