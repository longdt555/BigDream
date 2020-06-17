import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  focus: any;
  focus1: any;
  test : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
