import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';
import { MainComponent } from './main/main.component';
import { LearningComponent } from './learning/learning.component';
import { ParentsComponent } from './parents/parents.component';

export const routes: Routes = [
    {
        path:'', component:MainComponent
    },
    {
        path:'About', component:AboutComponent
    },
    {
        path:'Admission', component:AdmissionComponent
    },
    {
        path:'Learning',component:LearningComponent
    },
    {
        path:'Parents' ,component:ParentsComponent
    }
];

// About","Admission","Learning","News & Events","Parents"
