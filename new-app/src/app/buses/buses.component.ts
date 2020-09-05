import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    selector: 'app-buses',
    templateUrl: './buses.component.html',
    styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

    constructor(private http: HttpClient,
        private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
    }

}

