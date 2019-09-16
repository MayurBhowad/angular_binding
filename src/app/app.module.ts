import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { BidirecctionalbindingComponent } from './bidirecctionalbinding/bidirecctionalbinding.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropbindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    BidirecctionalbindingComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
