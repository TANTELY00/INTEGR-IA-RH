import { Component} from '@angular/core';
import { SelectComponent } from "../select/select.component";
import { DropComponent } from "../drop/drop.component";
import { StepComponent } from "../step/step.component";
import { PromptComponent } from "../prompt/prompt.component";
import { ResultatComponent } from "../resultat/resultat.component";


@Component({
  selector: 'app-analys',
  standalone: true,  
  imports: [SelectComponent, DropComponent, StepComponent, PromptComponent, ResultatComponent],
  templateUrl: './analys.component.html',
  styleUrl: './analys.component.css',
})
export class AnalysComponent {

     
  
}
