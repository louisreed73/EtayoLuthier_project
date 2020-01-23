import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent implements OnInit {

  @Input() guitar:object;

  constructor() { }



  ngOnInit() {


    console.log(this.guitar);
  }

};


