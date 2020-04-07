import { Component, OnInit } from '@angular/core';

const {log:l}=console;

@Component({
  selector: "app-header1",
  templateUrl: "./header1.component.html",
  styleUrls: ["./header1.component.scss"],
})
export class Header1Component implements OnInit {
  isDeskTop = false;
  wW = window.innerWidth;

  constructor() {}

  ngOnInit() {
       this.calculoW();

  }

  onResize(e: Event) {
    this.wW = (e.target as Window).innerWidth;
    this.calculoW()


  }

  calculoW() {
        if (this.wW >= 678) {
          this.isDeskTop = true;
        } else {
          this.isDeskTop = false;
        }
        l("Cambiando tamaño window!!!!", this.wW);

  }
}
