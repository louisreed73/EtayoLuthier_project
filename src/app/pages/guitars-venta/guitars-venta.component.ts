import { ServiceGuitarsVenta } from '../../sharedServices/service-guitarsVenta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitars-venta',
  templateUrl: './guitars-venta.component.html',
  styleUrls: ['./guitars-venta.component.scss']
})
export class GuitarsVentaComponent implements OnInit {


  guitarsV: Object[];

  constructor(private guitars: ServiceGuitarsVenta) { }

  ngOnInit() {
    // console.log(this.guitars.getGuitars());
    this.guitarsV = this.guitars.getGuitarsVenta();




  };

  ngOnDestroy() {



  }

}