import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    currentYear = new Date().getFullYear();
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
