import {Component, OnInit} from '@angular/core';
import {Baustein} from "../shared/Schiene";
import {GleisbauerService} from "../gleisbauer/gleisbauer.service";

@Component({
  selector: 'ad-ng-mod-schaltplan',
  templateUrl: './schaltplan.component.html',
  styleUrls: ['./schaltplan.component.css'],
  providers: [GleisbauerService]
})
export class SchaltplanComponent implements OnInit {

  schaltplan: Baustein[][] = [[]];

  constructor(private gleisbauerService: GleisbauerService) {
  }

  ngOnInit() {
    this.schaltplan = [[{'bildAdresse': "../assets/img/gleis_horizontal.png"}, {'bildAdresse': "../assets/img/gleis_horizontal.png"}],
      [{'bildAdresse': "../assets/img/gleis_horizontal.png"}]];
  }

}
