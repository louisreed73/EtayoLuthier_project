import { ServiceGuitars } from './../sharedServices/service-guitars';
import { ServiceBasses} from './../sharedServices/service-basses';
import { Layout1Component } from './../layouts/layout1/layout1.component';
import { Header1Component } from './../components/header1/header1.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HomeComponent } from './../pages/home/home.component';
import { GuitarsComponent } from './../pages/guitars/guitars.component';
import { BassesComponent } from './../pages/bass/bass.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { GuitarComponent } from '../components/guitar/guitar.component';
import { BassComponent } from './../components/bass/bass.component';


BassComponent


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  Routes,
  RouterModule
 } from '@angular/router';


 


FooterComponent
const AppRoutes:Routes=[
{path:"", redirectTo:"home", pathMatch:"full"},
{path:"", component:Layout1Component, children:[
  {path:"home", component:HomeComponent},
  {path:"guitars", component:GuitarsComponent},
  {path:"bass", component:BassesComponent},
  {path:"contact", component:ContactComponent},
]}
]


@NgModule({
  declarations: [
    Layout1Component,
    Header1Component,
    FooterComponent,
    HomeComponent,
    GuitarsComponent,
    BassesComponent,
    ContactComponent,
    GuitarComponent,
    BassComponent,



    

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    ServiceGuitars,
    ServiceBasses
  ]
})
export class RuteoModule { }
