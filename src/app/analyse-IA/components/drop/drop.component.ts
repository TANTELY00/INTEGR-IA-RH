import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http'; // Import de HttpClientModule
import { HttpClient } from '@angular/common/http'; // Import du service HttpClient

@Component({
  selector: 'app-drop',
  standalone: true,
  imports: [  CommonModule,
              FileUploadModule,
              ButtonModule,
              ToastModule,
              ProgressBarModule,
              HttpClientModule, 
              BadgeModule],
  providers: [MessageService],
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],

})
export class DropComponent {

  totalSize: number = 0;
  totalSizePercent: number = 0;

  formatSize(bytes: number): string {
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  onSelectedFiles(event: any) {
    console.log('Event:', event); // Log complet de l'objet event
    console.log('Files:', event.files); // Log des fichiers
  
    // Si event.files est un FileList, convertis-le en tableau
    const filesArray = event.files ? Array.from(event.files) : [];
    
    if (filesArray.length > 0) {
      this.totalSize = filesArray.reduce((acc: number, file: any) => acc + file.size, 0);
      this.totalSizePercent = Math.round((this.totalSize / 1000000) * 100);
    } else {
      console.error('Aucun fichier sélectionné.');
    }
  }
  
  

  onTemplatedUpload() {
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onRemoveTemplatingFile(event: any, file: any, callback: Function, index: number) {
    this.totalSize -= file.size;
    this.totalSizePercent = Math.round((this.totalSize / 1000000) * 100);
    callback(index);
    event.preventDefault();
  }

  uploadEvent(callback: Function) {
    callback();
  }

  choose(event: Event, callback: Function) {
    callback();
    event.preventDefault();
  }

}
