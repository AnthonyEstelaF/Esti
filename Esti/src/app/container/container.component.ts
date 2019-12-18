import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
cantiere: string[];
  constructor() {
    this.cantiere=['m1','m2','m3','m4','m5','m6','m7','m8','m9','m10'];
  }

  ngOnInit() {
  }

}
