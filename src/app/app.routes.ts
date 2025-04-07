import { Routes } from '@angular/router';
import { DashComponent } from './dashboard/components/dash/dash.component';
import { ContentComponent } from './dashboard/components/content/content.component';
import { AnalysComponent } from './analyse-IA/components/analys/analys.component';

export const routes: Routes = [
    {path:'' , component: DashComponent},
    {path:'dash' , component: DashComponent},
    {path:'analys' , component: AnalysComponent},
];
