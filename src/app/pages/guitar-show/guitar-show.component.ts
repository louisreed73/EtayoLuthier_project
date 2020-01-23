import { ServiceGuitars } from './../../sharedServices/service-guitars';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';








@Component({
  selector: 'app-guitar-show',
  templateUrl: './guitar-show.component.html',
  styleUrls: ['./guitar-show.component.scss']
})
export class GuitarShowComponent implements OnInit {

  id:number;
  guitarras:any[];
  guitarra:{};

  constructor(public servicioGuitars:ServiceGuitars,public router:ActivatedRoute) { }

  ngOnInit() {

    // console.log(+this.router.snapshot.params.id);
    this.id=+this.router.snapshot.params.id;
    // console.log(this.servicioGuitars.getGuitars());
    this.guitarras=this.servicioGuitars.getGuitars();
    let _guitarra=this.guitarras.filter(elem=>{
      return elem.id===this.id;
    })

    this.guitarra=_guitarra[0]
    console.log(this.guitarra);
  }

}
