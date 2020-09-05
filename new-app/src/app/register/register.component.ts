import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public uiInvalidCredential = false;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }
  public registerformgroup = new FormGroup({
    'username': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}"), Validators.minLength(5), Validators.maxLength(10)]),
    'upassword': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]{5,10}")]),
    'emailid': new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]+(@)[a-zA-Z]+(.)(com|in)")])

  });









  list: any = [];

  async adata() {
    const data = this.registerformgroup.value;
    let url = "http://localhost:5000/adduser";
    let result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    this.registerformgroup.reset;

  }

}

// if (result.msg) {
//   this.list.push(result.fun1);
//   console.log(this.list);
// }