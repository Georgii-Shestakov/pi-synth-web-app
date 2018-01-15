import { Component, OnInit } from '@angular/core';


class Synth {
  name: string;
  path: string;

  constructor(name: string, path:string) {
    this.name = name;
    this.path = path;
  }
}

@Component({
  selector: 'app-select-synth',
  templateUrl: './select-synth.component.html',
  styleUrls: ['./select-synth.component.scss']
})
export class SelectSynthComponent implements OnInit {

  sinthList: Synth[] = new Array();

  constructor() { }

  ngOnInit() {
    this.sinthList.push(new Synth("ZynAddSubFX", "/synth/zyn-add-sub-fx"))
  }

}
