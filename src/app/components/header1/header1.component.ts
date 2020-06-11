import { Component, OnInit } from '@angular/core';

const {log:l}=console;



@Component({
  selector: "app-header1",
  templateUrl: "./header1.component.html",
  styleUrls: ["./header1.component.scss"],
})
export class Header1Component implements OnInit {
  isDeskTop = false;
  deployed = false;
  wW = window.innerWidth;

  constructor() {}

  ngOnInit() {
    this.calculoW();
  }

  onResize(e: Event) {
    this.wW = (e.target as Window).innerWidth;
    this.calculoW();
  }

  calculoW() {
    if (this.wW >= 768) {
      this.isDeskTop = true;
    } else {
             if(this.deployed) {
               this.deployed=false;
             }
             this.isDeskTop = false;
           }
    l("Cambiando tamaño window!!!!", this.wW);
  }

  onMenu() {
    l(this.deployed);
    let ul = document.querySelector("ul[mobile]")!;
    ul.classList.toggle("min");
    setTimeout(() => {
      this.deployed = !this.deployed;
    }, 250);
    l(ul);
  }
  onLink() {
    this.onMenu()
  }
}
