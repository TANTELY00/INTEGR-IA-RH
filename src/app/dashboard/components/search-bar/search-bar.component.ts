import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule  } from 'primeng/inputgroupaddon';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {ToolbarModule} from 'primeng/toolbar';
import{SplitButtonModule} from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-bar',
  imports: [InputGroupModule,InputTextModule,InputGroupAddonModule,IconFieldModule,InputIconModule,ToolbarModule,SplitButtonModule,ButtonModule,CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}
