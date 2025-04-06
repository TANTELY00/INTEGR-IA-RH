import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { PasswordModule } from 'primeng/password';
import { MenuModule } from 'primeng/menu';
import { BadgeModule} from 'primeng/badge';
import { AvatarModule} from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [ButtonModule,PasswordModule,MenuModule,BadgeModule,AvatarModule,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

})
export class SidebarComponent {
  items: MenuItem[] = [
    {
      //label: 'Documents',
      items: [
        { label: 'Dashdoard', icon: 'pi pi-objects-column', shortcut: '⌘+N' ,link:'dash'},
        { label: 'Offer', icon: 'pi pi-megaphone', shortcut: '⌘+S',link:'offer' },
        { label: 'Analys', icon: 'pi pi-check', shortcut: '⌘+S',link:'analys' },
        { label: 'Interview', icon: 'pi pi-question-circle', shortcut: '⌘+O' ,link:'interview' },
        { label: 'Report', icon: 'pi pi-inbox', badge: '2' ,link:'report' },
        { label: 'Notification', icon: 'pi pi-bell', badge: '2' ,link:'notify' },
        { label: 'Settings', icon: 'pi pi-cog', shortcut: '⌘+O' ,link:'settings' },
        { label: 'Logout', icon: 'pi pi-sign-out', shortcut: '⌘+Q' ,link:'logout' }
      ]
    },
    // {
    //   //label: 'Profile',
    //   items: [
    //     { label: 'Settings', icon: 'pi pi-cog', shortcut: '⌘+O' },
    //     { label: 'Messages', icon: 'pi pi-inbox', badge: '2' },
    //     { label: 'Logout', icon: 'pi pi-sign-out', shortcut: '⌘+Q' }
    //   ]
    // }
  ];

  afficher : boolean = false;
  affiche(){
    this.afficher = !this.afficher;
  }

}
