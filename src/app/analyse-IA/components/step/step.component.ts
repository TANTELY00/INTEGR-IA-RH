import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-step',
  providers: [MessageService],
  imports: [CommonModule, StepsModule, ToastModule],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {

  activeIndex: number = 0;

  items = [
    { label: 'Select offer' },
    { label: 'Drag and drop files to here to upload.' },
    { label: 'Write a prompt' },
    { label: 'Send a prompt' },
    { label: 'Send email ' },
  ];

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
    console.log('Nouvelle étape :', event);
  } 

}
