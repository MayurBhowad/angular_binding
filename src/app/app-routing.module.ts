import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { BidirecctionalbindingComponent } from './bidirecctionalbinding/bidirecctionalbinding.component';


const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propbinding', component: PropbindingComponent},
  {path: 'classbinding', component: ClassbindingComponent},
  {path: 'stylebinding', component: StylebindingComponent},
  {path: 'eventbinding', component: EventbindingComponent},
  {path: 'bidirectionalbinding', component: BidirecctionalbindingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
