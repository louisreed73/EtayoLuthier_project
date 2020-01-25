import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instrument-show-heading',
  templateUrl: './instrument-show-heading.component.html',
  styleUrls: ['./instrument-show-heading.component.scss']
})
export class InstrumentShowHeadingComponent implements OnInit {

  @Input() instrument:any;

  constructor() { }

  ngOnInit() {

    console.log(this.instrument)
  }

}
