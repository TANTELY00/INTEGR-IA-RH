import { Component } from '@angular/core';
import{CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import{ButtonModule} from 'primeng/button';
import{TagModule} from 'primeng/tag';
import { CommonModule } from '@angular/common';
import {SpeedDialModule} from 'primeng/speeddial';


@Component({
  selector: 'app-content',
  imports: [CardModule ,CarouselModule,ButtonModule,TagModule,CommonModule,SpeedDialModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  standalone: true
})
export class ContentComponent {
  items: any[];


  constructor(){

    this.items = [
      {
        label: 'Option 1',
        icon: 'pi pi-check',
        command: () => { console.log('Option 1 selected'); }
      },
      {
        label: 'Option 2',
        icon: 'pi pi-times',
        command: () => { console.log('Option 2 selected'); }
      },
      {
        label: 'Option 3',
        icon: 'pi pi-pencil',
        command: () => { console.log('Option 3 selected'); }
      }
    ];
    
  }

  products = [
    {
      name: 'apply',
      image: '1.png',
      nbr: 65,
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'apply',
      image: '2.png',
      nbr: 72,
      inventoryStatus: 'LOWSTOCK'
    },
    {
      name: 'apply',
      image: '3.png',
      nbr: 45,
      inventoryStatus: 'OUTOFSTOCK'
    }
    ,
    {
      name: 'apply',
      image: '4.png',
      nbr: 45,
      inventoryStatus: 'OUTOFSTOCK'
    }
    ,
    {
      name: 'apply',
      image: '5.png',
      nbr: 45,
      inventoryStatus: 'OUTOFSTOCK'
    } ,
    {
      name: 'apply',
      image: '3.png',
      nbr: 65,
      inventoryStatus: 'INSTOCK'
    },
    {
      name: 'apply',
      image: '3.png',
      nbr: 72,
      inventoryStatus: 'LOWSTOCK'
    },
    // etc.
  ];
  

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

   
  
  

}
