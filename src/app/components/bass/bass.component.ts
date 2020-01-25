import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bass',
  templateUrl: './bass.component.html',
  styleUrls: ['./bass.component.scss']
})
export class BassComponent implements OnInit {

  @Input() bass:any;

  constructor() { }

  ngOnInit() {
  }

}
