import { Layout1Component } from './../layouts/layout1/layout1.component';
import { Header1Component } from './../components/header1/header1.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HomeComponent } from './../pages/home/home.component';
import { GuitarsComponent } from './../pages/guitars/guitars.component';
import { BassComponent } from './../pages/bass/bass.component';




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
  {path:"bass", component:BassComponent},
]}
]


@NgModule({
  declarations: [
    Layout1Component,
    Header1Component,
    FooterComponent,
    HomeComponent,
    GuitarsComponent,
    BassComponent,

    

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RuteoModule { }
