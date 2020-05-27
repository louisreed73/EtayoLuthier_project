import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-instrument-show-chars',
  templateUrl: './instrument-show-chars.component.html',
  styleUrls: ['./instrument-show-chars.component.scss']
})
export class InstrumentShowCharsComponent implements OnInit {

  @Input() instrument: any;
  charac:any[]=[];

  constructor() { }

  ngOnInit() {
    // console.log("Este instrumento!!!!",this.instrument,this.instrument.precio)

    this.charac = Object.keys(this.instrument.chars);

 /*    for (let i of this.instrument.chars[this.charac] ) {
      // console.log(i)
      console.log(i)
    } */
  }

  onClick(e:Event) {

    let active = document.querySelector("._instChars__Tabs .active");

    active.classList.remove("active");
    let numContent = (<HTMLElement>e.target).classList.value.match(/.$/);
    console.log(numContent);
    let activeContent = document.querySelector("._instChars__Content .activeContent");
    let toActiveContent = document.querySelector(`._instChars__Content_${numContent}`);

    // let numContent=Content
    (<HTMLElement>e.target).classList.add("active");
    activeContent.classList.remove("activeContent");
    toActiveContent.classList.add("activeContent");


  }

}
