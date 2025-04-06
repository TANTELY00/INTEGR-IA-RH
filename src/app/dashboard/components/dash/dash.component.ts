import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ActionsButtonComponent } from "../actions-button/actions-button.component";
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [SearchBarComponent,  ContentComponent],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {

}
