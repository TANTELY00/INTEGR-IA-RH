import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prompt',
  imports: [CommonModule, ReactiveFormsModule,ButtonModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      text: ['']  // initialisation du champ textarea
    });
  }

  submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value.text);
    }
  }
  
}
