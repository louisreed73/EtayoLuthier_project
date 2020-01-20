import { Component, OnInit } from '@angular/core';
import { ServiceBasses } from 'src/app/sharedServices/service-basses';

@Component({
  selector: 'app-basses',
  templateUrl: './bass.component.html',
  styleUrls: ['./bass.component.scss']
})
export class BassesComponent implements OnInit {

  bassesA:Object[];

  constructor(private basses:ServiceBasses) { }

  ngOnInit() {
    console.log(this.basses.getBasses());
    this.bassesA=this.basses.getBasses();
  }

}
