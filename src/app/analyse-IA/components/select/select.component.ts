import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [MultiSelectModule,CommonModule,ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit {

  formGroup!: FormGroup;

  cities = [
    { name: 'JAVA-DEV-001', code: 'NY' },
    { name: 'AI-DEV-00', code: 'LDN' },
    { name: 'JS-DEV-006', code: 'PAR' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selectedCities: [[]]  // Initialisation du FormControl avec un tableau vide
    });
  }

  submit() {
    console.log(this.formGroup.value);
  }


}
