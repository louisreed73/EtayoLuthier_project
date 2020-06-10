import { Component, OnInit, Input } from '@angular/core';

import { Carrousel } from "./../../sharedClasses/carrousel.class";

@Component({
  selector: 'app-instrument-show-heading',
  templateUrl: './instrument-show-heading.component.html',
  styleUrls: ['./instrument-show-heading.component.scss']
})
export class InstrumentShowHeadingComponent implements OnInit {

  @Input() instrument:any;

  constructor() { }

  isNumber(obj) {
    // return true
    return typeof obj==="number"
  }

  ngOnInit() {

    console.log(this.instrument, this.instrument.imagePath);

    
let botonBack = document.querySelector("#carrousel1 button.back");
let botonForward = document.querySelector("#carrousel1 button.forward");
// let botones2 = document.querySelectorAll("#carrousel1 button");

let carrousel1 = new Carrousel(
  this.instrument.images,
  this.instrument.imagePath,
  "#carrousel1"
);

botonBack.addEventListener("click", (e) =>
  carrousel1.setClick.call(carrousel1, false)
);
botonForward.addEventListener("click", (e) =>
  carrousel1.setClick.call(carrousel1, true)
);
  }

}
