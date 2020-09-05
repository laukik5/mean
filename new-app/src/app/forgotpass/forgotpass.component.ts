import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  public fpformgroup = new FormGroup({
    'username': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}"), Validators.minLength(5), Validators.maxLength(10)]),
    'upassword': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}")]),
    'emailid': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]+(@)[a-zA-Z]+(.)(com|in)")])

  });
  async update() {
    const data = this.fpformgroup.value;

    // ajax call
    const url = 'http://localhost:5000/updatepass';
    const result: any = await this.http.post(url, data).toPromise();

  }

}
