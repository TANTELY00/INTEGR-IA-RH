import { Routes } from '@angular/router';
import { DashComponent } from './dashboard/components/dash/dash.component';
import { ContentComponent } from './dashboard/components/content/content.component';

export const routes: Routes = [
    {path:'' , component: DashComponent},
    {path:'dash' , component: DashComponent},
];
