import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public uiInvalidCredential = false;
  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  public loginformgroup = new FormGroup({
    'username': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}"), Validators.minLength(5), Validators.maxLength(10)]),
    'upassword': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}"), Validators.minLength(5), Validators.maxLength(10)]),


  });
  async loginHere() {
    const data = this.loginformgroup.value;

    // ajax call
    const url = 'http://localhost:5000/addlogin';

    const result: any = await this.http.post(url, data).toPromise();

  }

}
