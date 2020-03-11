import { GuitarKleinShowComponent } from './../pages/guitar-showKlein/guitar-show.component';
import { GuitarsKleinComponent } from './../pages/guitars-klein/guitars-klein.component';
import { ServiceGuitars } from './../sharedServices/service-guitars';
import { ServiceGuitarsKlein } from './../sharedServices/service-guitarsKlein';
import { ServiceBasses} from './../sharedServices/service-basses';
import { Layout1Component } from './../layouts/layout1/layout1.component';
import { Header1Component } from './../components/header1/header1.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HomeComponent } from './../pages/home/home.component';
import { GuitarsComponent } from './../pages/guitars/guitars.component';
import { BassesComponent } from './../pages/bass/bass.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { GuitarComponent } from '../components/guitar/guitar.component';
import { GuitarShowComponent } from './../pages/guitar-show/guitar-show.component';
import { BassComponent } from './../components/bass/bass.component';
import { BassShowComponent } from './../pages/bass-show/bass-show.component';
import { InstrumentShowHeadingComponent } from "../components/instrumen-show-heading/instrument-show-heading.component";
import { InstrumentShowCharsComponent } from '../components/instrument-show-chars/instrument-show-chars.component';






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
  {path:"guitarsKlein", component:GuitarsKleinComponent},
  {path:"guitarsKlein/:name", component:GuitarKleinShowComponent},
  {path:"guitars/:name", component:GuitarShowComponent},
  {path:"bass", component:BassesComponent},
  {path:"bass/:name", component:BassShowComponent},
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
    GuitarsKleinComponent,
    BassesComponent,
    ContactComponent,
    GuitarComponent,
    BassComponent,
    GuitarKleinShowComponent,
    GuitarShowComponent,
    BassShowComponent,
    InstrumentShowHeadingComponent,
    InstrumentShowCharsComponent

  ],
  imports: [CommonModule, RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers: [ServiceGuitars, ServiceGuitarsKlein, ServiceBasses]
})
export class RuteoModule {}
